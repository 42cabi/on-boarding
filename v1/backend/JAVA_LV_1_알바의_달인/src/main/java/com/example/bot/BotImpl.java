package com.example.bot;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class BotImpl implements JiwonBehavior {
	private Map<String, Integer> shoppingCart = new HashMap<>();

	@Override
	public void takeOrder(String order) {
		OrderParser orderParser = new OrderParser();
		orderParser.parse(order);

		OrderMessages orderType = orderParser.getOrderType();
		switch (orderType) {
			case ADD:
			case ADD_1:
			case ADD_2:
				addProducts(orderParser.getProducts());
				break;
			case THROW:
				removeProduct(orderParser.getProducts().get(0));
				break;
			case FIND:
				findProduct(orderParser.getProducts().get(0));
				break;
			case COUNT:
				countProduct(orderParser.getProducts().get(0));
				break;
			case HOW_MUCH:
				result();
		}
	}

	@Override
	public void result() {
		System.out.printf("총 %d원 입니다\n", calculateTotalPrice());
	}

	private int getPrice(String product) {
		return product.length() * 1000;
	}

	private int calculateTotalPrice() {
		int price = 0;
		for (String product : shoppingCart.keySet()) {
			price += getPrice(product) * shoppingCart.get(product);
		}
		return price;
	}

	private void addProducts(List<String> products) {
		int price = 0;
		for (String product : products) {
			price += getPrice(product);
			if (shoppingCart.containsKey(product)) {
				shoppingCart.put(product, shoppingCart.get(product) + 1);
			} else {
				shoppingCart.put(product, 1);
			}
		}
		System.out.printf("네 %d원이요\n", price);
	}

	private void removeProduct(String product) {
		boolean isExist = false;
		if (shoppingCart.containsKey(product)) {
			isExist = true;
			shoppingCart.remove(product);
		}
		if (isExist) {
			System.out.println("네\n");
		} else {
			System.out.printf("<%s>안 시키셨어요\n", product);
		}
	}

	private void findProduct(String product) {
		if (shoppingCart.containsKey(product)) {
			System.out.printf("<%s>시키셨어요\n", product);
		} else {
			System.out.printf("<%s>안 시키셨어요\n", product);
		}
	}

	private void countProduct(String product) {
		int count = shoppingCart.getOrDefault(product, 0);
		if (count > 0) {
			System.out.printf("<%s>%d개요\n", product, count);
		} else {
			System.out.printf("<%s>안 시키셨어요\n", product);
		}
	}
}
