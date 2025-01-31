package com.example.lent.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;

/*Entity가 뭘까요?*/
@Getter
public class LentHistory {
	private Long lentHistoryId;
	private Long userId;
	private Long cabinetId;
	private String lentUserName;
	private LocalDateTime createdAt;
	private LocalDateTime expiredAt;

	public LentHistory(Long cabinetId, Long userId, String lentUserName, LocalDateTime createdAt, LocalDateTime expiredAt) {
		this.cabinetId = cabinetId;
		this.userId = userId;
		this.lentUserName = lentUserName;
		this.createdAt = createdAt;
		this.expiredAt = expiredAt;
	}

	public void id(Long lentHistoryId) {
		this.lentHistoryId = lentHistoryId;
	}
}
