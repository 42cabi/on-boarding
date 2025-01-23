package com.cabi.greetingCard.exception;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@JsonFormat(shape = Shape.OBJECT)
@RequiredArgsConstructor
@Getter
public enum ExceptionStatus {

	LOGIN_FAIL(HttpStatus.UNAUTHORIZED, "로그인에 실패했습니다.", "001"),
	DUPLICATED_NAME(HttpStatus.UNAUTHORIZED, "중복된 아이디입니다.", "002"),
	INVALID_NAME(HttpStatus.BAD_REQUEST, "형식에 맞지 않는 아이디입니다.", "003"),
	INVALID_PASSWORD(HttpStatus.BAD_REQUEST, "형식에 맞지 않는 비밀번호입니다.", "004"),
	INVALID_GROUP_ACCESS(HttpStatus.BAD_REQUEST, "잘못된 접근입니다.", "005"),
	INVALID_FORMAT_MESSAGE(HttpStatus.BAD_REQUEST, "잘못된 형식의 메세지입니다!", "007"),
	NOT_FOUND_USER(HttpStatus.NOT_FOUND, "존재하지 않는 유저입니디.", "008"),
	INVALID_QUERYSTRING(HttpStatus.BAD_REQUEST, "잘못된 쿼리스트링입니다.", "009"),
	UNAUTHORIZED(HttpStatus.UNAUTHORIZED, "권한이 없습니다.", "010"),
	NOT_FOUND_MESSAGE(HttpStatus.NOT_FOUND, "존재하지 않는 메세지입니다", "011"),
	SENDER_EQUAL_RECEIVER(HttpStatus.BAD_REQUEST, "보내는 사람과 받는 사람이 같습니다.", "013");

	private final int httpCode;
	private final String message;
	private final String error;
	private final String errorCode;

	ExceptionStatus(HttpStatus status, String message, String errorCode) {
		this.httpCode = status.value();
		this.message = message;
		this.error = status.getReasonPhrase();
		this.errorCode = errorCode;
	}

	public GreetingException asGreetingException() {
		return new GreetingException(this);
	}
}
