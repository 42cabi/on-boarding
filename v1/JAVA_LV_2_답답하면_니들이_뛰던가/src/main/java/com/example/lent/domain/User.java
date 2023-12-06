package com.example.lent.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

/*Entity가 뭘까요?*/
@Getter
@AllArgsConstructor
public class User {
	private Long userId;
	private String name;
	private boolean isBanned;
}
