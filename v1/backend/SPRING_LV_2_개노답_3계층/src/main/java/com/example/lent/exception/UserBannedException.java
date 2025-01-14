package com.example.lent.exception;

import static com.example.lent.exception.ExceptionMessages.USER_BANNED;

public class UserBannedException extends RuntimeException {

	public UserBannedException() {
		super(USER_BANNED.getMessage());
	}
}
