package com.example.lent.domain;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

/*Entity가 뭘까요?*/
@Getter
@RequiredArgsConstructor
public class User {
	private Long userId;
	private String name;
	private boolean isBanned;

	public User(Long userId, String name, boolean isBanned) {
		this.userId = userId;
		this.name = name;
		this.isBanned = isBanned;
	}
}
