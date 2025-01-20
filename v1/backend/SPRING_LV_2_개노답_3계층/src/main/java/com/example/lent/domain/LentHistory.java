package com.example.lent.domain;

import java.time.LocalDateTime;
import lombok.Getter;

/*Entity가 뭘까요?*/
@Getter
public class LentHistory {

	private final Long userId;
	private final Long cabinetId;
	private final String lentUserName;
	private final LocalDateTime createdAt;
	private final LocalDateTime expiredAt;
	private Long lentHistoryId;

	public LentHistory(Long cabinetId, Long userId, String lentUserName, LocalDateTime createdAt,
			LocalDateTime expiredAt) {
		this.cabinetId = cabinetId;
		this.userId = userId;
		this.lentUserName = lentUserName;
		this.createdAt = createdAt;
		this.expiredAt = expiredAt;
	}

	public void setId(Long id) {
		this.lentHistoryId = id;
	}
}
