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

	NOT_FOUND_MESSAGE(HttpStatus.NOT_FOUND, "존재하지 않는 메세지입니다"),
	UNAUTHORIZED_PASSWORD(HttpStatus.UNAUTHORIZED, "비밀번호가 일치하지 않습니다"),
	UNAUTHORIZED_USER(HttpStatus.UNAUTHORIZED, "권한이 없는 유저입니다."),
	DUPLICATED_NAME(HttpStatus.UNAUTHORIZED, "중복된 아이디입니다."),
	INVALID_NAME(HttpStatus.BAD_REQUEST, "형식에 맞지 않는 아이디입니다."),
	INVALID_PASSWORD(HttpStatus.BAD_REQUEST, "형식에 맞지 않는 비밀번호입니다."),
	NOT_FOUND_USER(HttpStatus.NOT_FOUND, "존재하지 않는 유저입니디."),
	INVALID_FORMAT_MESSAGE(HttpStatus.BAD_REQUEST, "잘못된 형식의 메세지입니다!"),
	INVALID_COOKIE(HttpStatus.BAD_REQUEST, "잘못된 쿠키입니다."),
	INVALID_QUERYSTRING(HttpStatus.BAD_REQUEST, "잘못된 쿼리스트링입니다.");

	private final int errorCode;
	private final String message;
	private final String error;

	ExceptionStatus(HttpStatus status, String message) {
		this.errorCode = status.value();
		this.message = message;
		this.error = status.getReasonPhrase();
	}

	public GreetingException asGreetingException() {
		return new GreetingException(this);
	}
}
