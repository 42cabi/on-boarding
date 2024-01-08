package com.example.kong;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/* Spring Boot에서 컨트롤러는 어떻게 인식할까요? */
@RestController //@Controller(이쪽으로 가면 View에염) + @ResponseBody(메서드 어노테이션) -> Http Response에 박아버려 View 찾지 마셈
@RequiredArgsConstructor
public class KongController {

	private final KongService kongService;

	// 내장된 톰캣(Tomcat) 서버나 다른 서블릿 컨테이너 위에서 애플리케이션 실행 시 요청을 컨트롤러로 라우팅.
	@GetMapping("/reaction")
	public String reaction() {
		return kongService.reactToDrink();
	}
}
