package com.cabi.greetingCard.dto;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class MessageResponsePaginationDto {

	private List<MessageResponseDto> messages;
	private int totalLength;
	private int currentPage;
}
