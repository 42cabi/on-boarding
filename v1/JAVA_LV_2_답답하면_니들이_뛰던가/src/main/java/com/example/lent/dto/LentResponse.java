package com.example.lent.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;

/*DTO가 뭘까요?*/
@RequiredArgsConstructor
@Getter
public class LentResponse {
	private final Long lentHistoryId;
	private final Long cabinetId;
	private final String userName;
	private final LocalDateTime lentAt;
	private final LocalDateTime expiredAt;
}
