package com.cabi.greetingCard.message.service;

import static com.cabi.greetingCard.user.domain.GroupNames.GROUP_EVERYONE;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.cabi.greetingCard.dto.MessageRequestDto;
import com.cabi.greetingCard.dto.MessageResponseDto;
import com.cabi.greetingCard.dto.MessageResponsePaginationDto;
import com.cabi.greetingCard.exception.ExceptionStatus;
import com.cabi.greetingCard.message.domain.Message;
import com.cabi.greetingCard.message.repository.MessageRepository;
import com.cabi.greetingCard.user.domain.User;
import com.cabi.greetingCard.user.repository.UserRepository;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
	@Value("${cloud.aws.s3.bucket}")
	private String bucketName;

	private static void verifyValidMessageFormat(MessageRequestDto messageData) {
		if (messageData.getContext().isEmpty()
				|| messageData.getContext().length() > MESSAGE_LENGTH_LIMIT) {
			throw ExceptionStatus.INVALID_FORMAT_MESSAGE.asGreetingException();
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
		verifyValidMessageFormat(messageData);

		Message message =
				Message.of(userName, messageData.getReceiverName(), messageData.getContext(),
						imageUrl, LocalDateTime.now());

		messageRepository.save(message);
	}

	private void verifyExistUser(MessageRequestDto messageData) {
		if (!userRepository.existsByName(messageData.getReceiverName())) {
			throw ExceptionStatus.NOT_FOUND_USER.asGreetingException();
		}
	}

	@Transactional
	public void sendMessageToAll(MessageRequestDto messageData, String userName, String imageUrl) {
		verifyValidMessageFormat(messageData);

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
	 * receiverName을 everyone으로 받은 메세지 조회
	 * <p>
	 * dto는 왜쓰는걸까용?
	 *
	 * @param userName
	 * @param page
	 * @param size
	 * @return
	 */
	public MessageResponsePaginationDto getEveryoneMessage(String userName, Pageable pageable) {
		Page<Message> receivedMessages;

		List<MessageResponseDto> messageDtos = new ArrayList<>();
		return new MessageResponsePaginationDto(messageDtos, 0L);
	}

	/**
	 * 내가 받은 메세지 조회
	 *
	 * @param userName
	 * @param pageable
	 * @return
	 */
	public MessageResponsePaginationDto getReceivedMessages(String userName, Pageable pageable) {
		Page<Message> receivedMessages;

		List<MessageResponseDto> messageDtos = new ArrayList<>();
		return new MessageResponsePaginationDto(messageDtos, 0L);
	}

	/**
	 * 내가 보낸 메세지 조회
	 *
	 * @param userName
	 * @param pageable
	 * @return
	 */
	public MessageResponsePaginationDto getSentMessages(String userName, Pageable pageable) {
		Page<Message> sentMessages;
		List<MessageResponseDto> messageDtos = new ArrayList<>();
		return new MessageResponsePaginationDto(messageDtos, 0L);
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
		message.updateContext(context);
	}
}

