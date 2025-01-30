package com.example.kong;

import com.example.kong.util.DrinkPrinter;
import com.example.kong.util.DrinkProperties;
import com.example.kong.util.Space;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

/* Spring Boot에서 서비스는 어떻게 인식할까요? */
@Service
@RequiredArgsConstructor
public class KongService {

	/* 어떻게 주입받아야 할까요? */
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
