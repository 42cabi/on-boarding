package com.example.lent.exception;

public enum ExceptionMessages {
	CABINET_ALREADY_LENT("이미 사용 중인 사물함입니다."),
	USER_ALREADY_LENT("이미 대여 중인 유저입니다."),
	USER_BANNED("사용 정지상태인 유저입니다."),
	CABINET_NOT_EXIST("해당 사물함을 찾을 수 없습니다.");

	private final String message;

	ExceptionMessages(String message) {
		this.message = message;
	}
}
