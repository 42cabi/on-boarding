package com.example.lent.domain;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;

/*Entity가 뭘까요?*/
@Getter
public class LentHistory {
	private Long lentHistoryId;
	private Long cabinetId;
	private String lentUserName;
	private LocalDateTime createdAt;
	private LocalDateTime expiredAt;

	public LentHistory(Long lentHistoryId, Long cabinetId, String lentUserName, LocalDateTime createdAt, LocalDateTime expiredAt) {
		this.lentHistoryId = lentHistoryId;
		this.cabinetId = cabinetId;
		this.lentUserName = lentUserName;
		this.createdAt = createdAt;
		this.expiredAt = expiredAt;
	}
}
