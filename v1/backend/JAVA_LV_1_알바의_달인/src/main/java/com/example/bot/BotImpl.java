package com.example.bot;

import java.util.HashMap;
import java.util.Map;

public class BotImpl implements JiwonBehavior {
	private Map<String, Integer> shoppingCart = new HashMap<>();

	@Override
	public void takeOrder(String order) {
	}

	@Override
	public void result() {
		System.out.printf("총 %d원 입니다\n", calculateTotalPrice());
	}

	private int getPrice(String product) {
		return product.length();
	}

	private int calculateTotalPrice() {
		int price = 0;
		for (String product : shoppingCart.keySet()) {
			price = getPrice(product) * shoppingCart.get(product);
		}
		return price;
	}
}
