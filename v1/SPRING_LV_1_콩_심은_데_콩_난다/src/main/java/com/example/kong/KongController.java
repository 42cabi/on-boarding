package com.example.kong;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class KongController {

	private final KongService kongService;

	@GetMapping("/reaction")
	public String reaction() {
		return kongService.reactToDrink();
	}
}
