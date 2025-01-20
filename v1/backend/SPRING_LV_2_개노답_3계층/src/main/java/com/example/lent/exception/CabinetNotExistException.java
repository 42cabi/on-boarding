package com.example.lent.exception;

import static com.example.lent.exception.ExceptionMessages.CABINET_NOT_EXIST;

public class CabinetNotExistException extends RuntimeException {

	public CabinetNotExistException() {
		super(CABINET_NOT_EXIST.getMessage());
	}
}
