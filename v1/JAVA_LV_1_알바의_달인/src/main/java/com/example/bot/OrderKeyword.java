package com.example.bot;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum OrderKeyword {
	이랑("이랑"),
	랑("랑"),
	빼("빼"),
	개("개"),
	시켰나("시켰나?"),
	몇개야("몇 개야?"),
	얼마야("얼마야?");

	private final String keyword;

	public String keyword() {
		return keyword;
	}
}