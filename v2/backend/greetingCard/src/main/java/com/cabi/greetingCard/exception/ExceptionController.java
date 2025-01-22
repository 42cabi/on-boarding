package com.cabi.greetingCard.exception;

import com.cabi.greetingCard.dto.UserInfoDto;
import java.util.HashMap;
import java.util.Map;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 * 서버에서 에러가 발생했다고 모두 500으로 던지면 FE 팀원들이 너무 슬퍼할겁니다!
 * <p>
 * 이번 프로젝트에서는 에러 컨트롤러가 어떻게 작동하는지만 알아보고, 사용만 해보세여!!
 */
@RestControllerAdvice
public class ExceptionController {

	// DTO별 입력 값 검증 에러 맵
	private static final Map<Class<?>, Map<String, ExceptionStatus>> validationExceptions = new HashMap<>();

	static {
		// DTO별 입력 값 검증 에러 맵 초기화
		validationExceptions.put(UserInfoDto.class, Map.of(
				"name", ExceptionStatus.INVALID_NAME,
				"password", ExceptionStatus.INVALID_PASSWORD
		));
	}

	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<?> validationExceptionHandler(MethodArgumentNotValidException e) {
		Map<String, ExceptionStatus> exceptionStatusMap = validationExceptions.get(
				e.getParameter().getParameterType());
		ExceptionStatus exceptionStatus = exceptionStatusMap.get(e.getFieldError().getField());
		return ResponseEntity
				.status(exceptionStatus.getStatusCode())
				.body(exceptionStatus);
	}

	@ExceptionHandler(GreetingException.class)
	public ResponseEntity<?> serviceExceptionHandler(GreetingException e) {
		return ResponseEntity
				.status(e.status.getStatusCode())
				.body(e.status);
	}
}
