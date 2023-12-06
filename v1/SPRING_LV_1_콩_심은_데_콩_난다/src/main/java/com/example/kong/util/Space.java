package com.example.kong.util;

import com.example.kong.util.DrinkPrinter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class Space {
	private static final String PREFER_DRINK = "coke";

	public String reactTo(String drink) {
		if (PREFER_DRINK.equals(drink)) {
			return "YES";
		}
		return "NO";
	}
}
