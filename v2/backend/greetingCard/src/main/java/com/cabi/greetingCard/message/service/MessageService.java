package com.cabi.greetingCard.message.service;

import static com.cabi.greetingCard.user.domain.GroupNames.GROUP_EVERYONE;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.cabi.greetingCard.dto.MessageRequestDto;
import com.cabi.greetingCard.dto.MessageResponseDto;
import com.cabi.greetingCard.dto.MessageResponsePaginationDto;
import com.cabi.greetingCard.exception.ExceptionStatus;
import com.cabi.greetingCard.mapper.MessageMapper;
import com.cabi.greetingCard.message.domain.Message;
import com.cabi.greetingCard.message.domain.MessageCategory;
import com.cabi.greetingCard.message.repository.MessageRepository;
import com.cabi.greetingCard.user.domain.User;
import com.cabi.greetingCard.user.repository.UserRepository;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@Service
@RequiredArgsConstructor
@Slf4j
public class MessageService {

	static final int MESSAGE_LENGTH_LIMIT = 42;

	private final MessageRepository messageRepository;
	private final AmazonS3 s3Client;
	private final UserRepository userRepository;
	private final MessageMapper messageMapper;
	@Value("${cloud.aws.s3.bucket}")
	private String bucketName;

	private static void verifyValidMessageFormat(String context) {
		if (context.isEmpty()
				|| context.length() > MESSAGE_LENGTH_LIMIT) {
			throw ExceptionStatus.INVALID_FORMAT_MESSAGE.asGreetingException();
		}
	}

	private static void verifyUserAuthorized(String userName, Message message) {
		if (!message.getSenderName().equals(userName)) {
			throw ExceptionStatus.UNAUTHORIZED.asGreetingException();
		}
	}

	private static void verifyValidPageInfo(Pageable pageable) {
		if (pageable.getPageNumber() < 0 || pageable.getPageSize() <= 0) {
			throw ExceptionStatus.INVALID_QUERYSTRING.asGreetingException();
		}
	}

	/**
	 * 메세지 보내기
	 *
	 * @param userName
	 * @param messageData
	 * @throws IOException
	 */
	@Transactional
	public void sendMessage(String userName, MessageRequestDto messageData) throws IOException {
		String imageUrl = saveImage(messageData.getImage());

		if (messageData.getReceiverName().equals(GROUP_EVERYONE)) {
			sendMessageToAll(messageData, userName, imageUrl);
			return;
		}

		verifyExistUser(messageData);
		verifyValidMessageFormat(messageData.getContext());

		Message message =
				Message.of(userName, messageData.getReceiverName(), messageData.getContext(),
						imageUrl, LocalDateTime.now());

		messageRepository.save(message);
	}

	/**
	 * 로그인한 유저를 제외한 모두에게 메세지를 보냅니다.
	 *
	 * @param messageData
	 * @param userName
	 * @param imageUrl
	 */
	@Transactional
	public void sendMessageToAll(MessageRequestDto messageData, String userName, String imageUrl) {
		verifyValidMessageFormat(messageData.getContext());

		List<User> userList = userRepository.findAll();
		userList.removeIf(user -> user.getName().equals(userName));
		List<Message> messageList = userList.stream()
				.map(user -> Message.of(userName, messageData.getReceiverName(),
						messageData.getContext(), imageUrl, LocalDateTime.now()))
				.toList();
		messageRepository.saveAll(messageList);
	}

	/**
	 * 수정할 부분 없읍니다!
	 * <p>
	 * 멀티파트인 이미지를 s3 이미지 업로드 -> url 반환
	 *
	 * @param imageFile
	 * @return
	 * @throws IOException
	 */
	public String saveImage(Optional<MultipartFile> imageFile) throws IOException {
		if (imageFile.isEmpty()) {
			return "";
		}
		MultipartFile image = imageFile.get();
		String originalFilename = image.getOriginalFilename();
		String extension = originalFilename.contains(".") ? originalFilename.substring(
				originalFilename.lastIndexOf(".")) : "";
		verifyExtensionType(extension);
		String safeFileName = originalFilename.length() > 10 ? originalFilename.substring(0, 10)
				: originalFilename;
		String s3FileName = UUID.randomUUID() + safeFileName + extension;

		ObjectMetadata objectMetadata = new ObjectMetadata();
		objectMetadata.setContentType(image.getContentType());
		objectMetadata.setContentLength(image.getSize());
		s3Client.putObject(bucketName, s3FileName, image.getInputStream(), objectMetadata);

		return s3Client.getUrl(bucketName, s3FileName).toString();
	}

	private void verifyExtensionType(String extension) {
		List<String> allowedExtensions = List.of(".jpg", ".jpeg", ".png");
		if (!allowedExtensions.contains(extension)) {
			throw ExceptionStatus.INVALID_FORMAT_MESSAGE.asGreetingException();
		}
	}

	/**
	 * 내가 보낸 메세지 수정
	 * <p>
	 * 메세지의 발신자와 쿠키 내의 userName이 같지 않다면, 에러를 반환합니다.
	 *
	 * @param userName
	 * @param messageId
	 * @param context
	 */
	@Transactional
	public void updateMessageContext(String userName, Long messageId, String context) {
		Message message = messageRepository.findById(messageId)
				.orElseThrow(ExceptionStatus.NOT_FOUND_MESSAGE::asGreetingException);
		verifyUserAuthorized(userName, message);
		verifyValidMessageFormat(context);
		message.updateContext(context);
	}

	/**
	 * 조건에 맞는 메세지 리스트를 반환합니다. 페이징 처리가 되며 카테고리마다 다른 결과를 반환합니다.
	 *
	 * @param userName
	 * @param pageable
	 * @return
	 */
	@Transactional
	public MessageResponsePaginationDto getMessages(String userName, Pageable pageable,
			int category) {
		verifyValidPageInfo(pageable);

		// pageNumber는 프론트에서 1부터 인덱싱하기 때문에 -1을 해주고 있음
		PageRequest pageRequest = PageRequest.of(pageable.getPageNumber() - 1,
				pageable.getPageSize(),
				Sort.by("created").descending());

		Page<Message> messageList = splitByCategory(userName, category, pageRequest);

		List<MessageResponseDto> messageResponseDtoList = messageList.stream()
				.map(message -> messageMapper.toMessageResponseDto(message,
						userName.equals(message.getSenderName()))).toList();

		return new MessageResponsePaginationDto(messageResponseDtoList,
				messageList.getTotalPages());
	}

	/**
	 * 카테고리에 맞게 데이터를 조회하는 메서드를 호출하고 리턴값을 반환합니다.
	 *
	 * @param userName
	 * @param category
	 * @param pageRequest
	 * @return
	 */
	private Page<Message> splitByCategory(String userName, int category, PageRequest pageRequest) {
		Page<Message> messageList;
		if (category == MessageCategory.TO_EVERYONE.getNumber()) {
			messageList = getMessagesSendEveryone(pageRequest);
		} else if (category == MessageCategory.TO_ME.getNumber()) {
			messageList = getMessagesSendMe(userName, pageRequest);
		} else if (category == MessageCategory.FROM_ME.getNumber()) {
			messageList = getMessagesFromMe(userName, pageRequest);
		} else {
			throw ExceptionStatus.INVALID_QUERYSTRING.asGreetingException();
		}
		return messageList;
	}

	/**
	 * 내가 보낸 메세지들을 조회합니다.
	 *
	 * @param userName
	 * @param pageRequest
	 * @return
	 */
	private Page<Message> getMessagesFromMe(String userName, PageRequest pageRequest) {
		return messageRepository.findAllBySenderName(userName, pageRequest);
	}

	/**
	 * 모두에게 보내진 메세지들을 조회합니다.
	 *
	 * @param pageRequest
	 * @return
	 */
	private Page<Message> getMessagesSendEveryone(PageRequest pageRequest) {
		return messageRepository.findAllByReceiverName(MessageCategory.TO_EVERYONE.getName(),
				pageRequest);
	}

	/**
	 * 나에게 보내진 메세지들을 조회합니다.
	 *
	 * @param userName
	 * @param pageRequest
	 * @return
	 */
	private Page<Message> getMessagesSendMe(String userName, PageRequest pageRequest) {
		return messageRepository.findAllByReceiverName(userName, pageRequest);
	}

	private void verifyExistUser(MessageRequestDto messageData) {
		if (!userRepository.existsByName(messageData.getReceiverName())) {
			throw ExceptionStatus.NOT_FOUND_USER.asGreetingException();
		}
	}

}

