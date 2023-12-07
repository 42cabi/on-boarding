package com.example.dongglee;

import com.example.dongglee.domain.Director;
import com.example.dongglee.dto.DirectorCreateRequestDto;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/directors")
public class DirectorController {

	@PostMapping
	public Director createDirector(
			@RequestBody DirectorCreateRequestDto dto
	) {
		return null;
	}
}
