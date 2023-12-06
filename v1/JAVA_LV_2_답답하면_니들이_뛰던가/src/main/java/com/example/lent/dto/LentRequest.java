package com.example.lent.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;

/*DTO가 뭘까요?*/
@RequiredArgsConstructor
@Getter
public class LentRequest {
	private final Long cabinetId;
	private final Long userId;
	private final LocalDateTime createdAt;
}
