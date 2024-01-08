package com.example.kong;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/* Spring Boot에서 컨트롤러는 어떻게 인식할까요? */
@RestController
@RequiredArgsConstructor
public class KongController {

	private final KongService kongService;

	@GetMapping("/reaction")
	public String reaction() {
		return kongService.reactToDrink();
	}
}
