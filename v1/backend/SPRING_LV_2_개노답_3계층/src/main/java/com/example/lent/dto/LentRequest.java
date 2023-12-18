package com.example.lent.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;

/*DTO가 뭘까요?*/
@AllArgsConstructor
@Getter
public class LentRequest {
	private Long cabinetId;
	private Long userId;
	private LocalDateTime createdAt;
}
