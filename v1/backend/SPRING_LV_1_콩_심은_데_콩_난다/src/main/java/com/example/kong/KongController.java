package com.example.kong;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/* Spring Boot에서 컨트롤러는 어떻게 인식할까요? */
@RestController // controller + ResponseBody -> json형태로 객체 반환
public class KongController {

	private final KongService kongService;


	public KongController(KongService kongService) {
		this.kongService = kongService;
	}

	@GetMapping("/reaction")
	public String reaction() {
		return kongService.reactToDrink();
	}
}
