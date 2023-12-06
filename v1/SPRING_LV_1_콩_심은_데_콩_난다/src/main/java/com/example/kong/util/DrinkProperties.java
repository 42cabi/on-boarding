package com.example.kong.util;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
@Getter
public class DrinkProperties {

	@Value("${spring.kong.what-kind-of-drink}")
	private String drink;
}
