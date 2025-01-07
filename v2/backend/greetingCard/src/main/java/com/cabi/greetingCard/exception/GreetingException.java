package com.cabi.greetingCard.exception;

import lombok.Getter;

@Getter
public class GreetingException extends RuntimeException {

	public final ExceptionStatus status;

	public GreetingException(ExceptionStatus status) {
		this.status = status;
	}

	@Override
	public String getMessage() {
		return status.getMessage();
	}
}
