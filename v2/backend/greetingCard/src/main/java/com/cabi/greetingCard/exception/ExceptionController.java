package com.cabi.greetingCard.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 * 서버에서 에러가 발생했다고 모두 500으로 던지면 FE 팀원들이 너무 슬퍼할겁니다!
 * <p>
 * 이번 프로젝트에서는 에러 컨트롤러가 어떻게 작동하는지만 알아보고, 사용만 해보세여!!
 */
@RestControllerAdvice
public class ExceptionController {

	@ExceptionHandler(GreetingException.class)
	public ResponseEntity<?> serviceExceptionHandler(GreetingException e) {
		return ResponseEntity
				.status(e.status.getErrorCode())
				.body(e.status);
	}
}
