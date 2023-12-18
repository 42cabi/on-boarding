package com.example.lent.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;

/*DTO가 뭘까요?*/
@AllArgsConstructor
@Getter
public class LentResponse {
	private Long lentHistoryId;
	private Long cabinetId;
	private String userName;
	private LocalDateTime lentAt;
	private LocalDateTime expiredAt;
}
