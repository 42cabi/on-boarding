package com.example.lent.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

/*Entity가 뭘까요?*/
@Getter
public class User {
	private Long userId;
	private String name;
	private boolean isBanned;

	public User(String name, boolean isBanned) {
		this.name = name;
		this.isBanned = isBanned;
	}

	public void id(Long userId) {
		this.userId = userId;
	}
}
