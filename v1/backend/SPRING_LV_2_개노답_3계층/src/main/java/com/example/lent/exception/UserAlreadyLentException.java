package com.example.lent.exception;

import static com.example.lent.exception.ExceptionMessages.USER_ALREADY_LENT;

public class UserAlreadyLentException extends RuntimeException {

	public UserAlreadyLentException() {
		super(USER_ALREADY_LENT.getMessage());
	}
}
