package com.example.kong;

import org.springframework.web.bind.annotation.GetMapping;

/* Spring Boot에서 컨트롤러는 어떻게 인식할까요? */
public class KongController {

	private KongService kongService;

	@GetMapping("/reaction")
	public String reaction() {
		return kongService.reactToDrink();
	}
}
