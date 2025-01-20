package com.example.lent.exception;

import static com.example.lent.exception.ExceptionMessages.CABINET_ALREADY_LENT;

public class CabinetAlreadyLentException extends RuntimeException {

	public CabinetAlreadyLentException() {
		super(CABINET_ALREADY_LENT.getMessage());
	}
}
