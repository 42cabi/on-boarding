package com.cabi.greetingCard.message.controller;

import com.cabi.greetingCard.dto.MessageRequestDto;
import com.cabi.greetingCard.dto.MessageResponsePaginationDto;
import com.cabi.greetingCard.dto.RequestDto;
import com.cabi.greetingCard.message.service.MessageService;
import java.io.IOException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/messages")
@Slf4j
public class MessageController {

	private final MessageService messageService;

	/**
	 * 한 명에게 메세지 보내기
	 * <p>
	 * 이미지 파일과 body를 함께 받기 위해 ModelAttribute 어노테이션을 사용했습니다.
	 *
	 * @param userName
	 * @param messageData
	 * @throws IOException
	 */
	@PostMapping("")
	public void sendMessage(@CookieValue(name = "userName") String userName,
			@ModelAttribute MessageRequestDto messageData) throws IOException {
		messageService.sendMessage(userName, messageData);
	}

	/**
	 * Pageable.. 뭘까요?
	 *
	 * @param userName
	 * @param pageable
	 * @param category
	 * @return
	 */
	@GetMapping("")
	public ResponseEntity<MessageResponsePaginationDto> getAllMessages(
			@CookieValue(name = "userName") String userName,
			Pageable pageable,
			int category) {
		MessageResponsePaginationDto messages = messageService.getMessages(userName, pageable,
				category);

		return ResponseEntity.ok()
				.body(messages);
	}

	/**
	 * 모두에게 덕담 메세지 보내기
	 *
	 * @param userName
	 * @param message
	 * @throws IOException
	 */
	@PostMapping("/test1")
	public void postAllUsers(@CookieValue(name = "userName") String userName,
			@ModelAttribute MessageRequestDto message) throws IOException {
		messageService.sendMessage(userName, message);
	}

	@GetMapping("/test2")
	public MessageResponsePaginationDto getReceivedMessages(
			@CookieValue(name = "userName") String userName,
			Pageable pageable) {
		return messageService.getReceivedMessages(userName, pageable);
	}

	@GetMapping("/test3")
	public MessageResponsePaginationDto getSentMessages(
			@CookieValue(name = "userName") String userName,
			Pageable pageable) {
		return messageService.getSentMessages(userName, pageable);
	}

	/**
	 * 메세지 내용을 수정합니다.
	 *
	 * @param userName
	 * @param messageId
	 * @param requestDto
	 */
	@PutMapping("/{messageId}")
	public ResponseEntity<?> updateMessageContext(@CookieValue(name = "userName") String userName,
			@PathVariable(name = "messageId") Long messageId,
			@RequestBody RequestDto requestDto) {
		messageService.updateMessageContext(userName, messageId, requestDto.getContext());
		return ResponseEntity.ok().build();
	}
}
