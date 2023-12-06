package com.example.kong;

import com.example.kong.util.DrinkPrinter;
import com.example.kong.util.DrinkProperties;
import com.example.kong.util.Space;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class KongService {

	private final DrinkProperties drinkProperties;

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
