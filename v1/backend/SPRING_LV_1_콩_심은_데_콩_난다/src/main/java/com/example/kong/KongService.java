package com.example.kong;

import com.example.kong.util.DrinkPrinter;
import com.example.kong.util.DrinkProperties;
import com.example.kong.util.Space;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/* Spring Boot에서 서비스는 어떻게 인식할까요? */
@Service // 동일하게 컴포넌트 스캔 Component 파생 어노테이션
@RequiredArgsConstructor
public class KongService {

	/* 어떻게 주입받아야 할까요? */
	/*
	* @RequiredArgsConstructor
	* final / @NonNull 필드들에 대해 생성자 자동 생성
	* DI를 위해 사용, final 키워드가 붙은 모든 필드를 인자로 받아 의존성 주입
	* 아래의 긴 코드들을 Lombok이 깨깟하게 정리
	*
	* @Autowired
	* public KongService(DrinkProperties drinkProperties) {
	* 	this.drinkProperties = drinkProperties;
	* }
	* */
	private final DrinkProperties drinkProperties;


	// 냄새가 나는 코드지만 예제를 위한 부분이니 신경쓰지 말아주세요..
	public String reactToDrink() {
		Space wouldYou = new Space();
		String drink = drinkProperties.getDrink();

		if (drink.equals("coffee"))
			DrinkPrinter.printCoffee();
		else if (drink.equals("coke"))
			DrinkPrinter.printCoke();
		else
			throw new RuntimeException("무슨 음료인지 모르겠어요..");
		return wouldYou.reactTo(drink);
	}
}
