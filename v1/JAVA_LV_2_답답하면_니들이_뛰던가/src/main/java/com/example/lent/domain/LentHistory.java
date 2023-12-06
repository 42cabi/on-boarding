package com.example.lent.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;

/*Entity가 뭘까요?*/
@Getter
@AllArgsConstructor
public class LentHistory {
	private Long lentHistoryId;
	private Long cabinetId;
	private String lentUserName;
	private LocalDateTime createdAt;
	private LocalDateTime expiredAt;

}
