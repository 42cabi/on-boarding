package com.example.kong.util;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component // 가 뭘까요?
@Getter
public class DrinkProperties {

	@Value("${spring.kong.what-kind-of-drink}") // 는 어떻게 값을 가져오는 걸까요?
	private String drink;
}
