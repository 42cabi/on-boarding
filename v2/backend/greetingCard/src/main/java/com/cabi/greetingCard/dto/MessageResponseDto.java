package com.cabi.greetingCard.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class MessageResponseDto {

	private Long id;
	private String senderName;
	private String receiverName;
	private String context;
	private String imageUrl;
	private boolean isMine;
}
