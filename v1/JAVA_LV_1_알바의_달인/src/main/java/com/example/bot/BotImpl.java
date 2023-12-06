package com.example.bot;

import java.util.HashMap;
import java.util.Map;

public class BotImpl implements JiwonBehavior {

	private final Map<String, Integer> productAmountMap = new HashMap<>();
	@Override
	public void takeOrder(String order) {
		Order orders = OrderFactory.createOrder(order);

		switch (orders.getType()) {
			case ADD -> {
				addProduct(orders.getFirst());
				tellPrice(calculatePrice(orders.getFirst()));
			}
			case MULTI_ADD -> {
				int sum = 0;
				for (String product : orders.getProducts()) {
					addProduct(product);
					sum += calculatePrice(product);
				}
				tellPrice(sum);
			}
			case REMOVE -> {
				if (productAmountMap.containsKey(orders.getFirst())) {
					removeProduct(orders.getFirst());
					yes();
				}
				else
					tellProductNotOrdered(orders.getFirst());
			}
			case QUERY_EXISTENCE -> {
				if (productAmountMap.containsKey(orders.getFirst()))
					tellProductOrdered(orders.getFirst());
				else
					tellProductNotOrdered(orders.getFirst());
			}
			case QUERY_COUNT -> {
				if (productAmountMap.containsKey(orders.getFirst()))
					tellCount(orders.getFirst());
				else
					tellProductNotOrdered(orders.getFirst());
			}
			case RESULT -> result();
		}
	}

	@Override
	public void result() {
		int sum = 0;
		for (String product : productAmountMap.keySet()) {
			sum += calculatePrice(product) * productAmountMap.get(product);
		}
		System.out.println("총 " + sum + "원 입니다");
	}

	private int calculatePrice(String product) {
		if (!productAmountMap.containsKey(product))
			return 0;
		else {
			return product.length() * 1000;
		}
	}

	private void addProduct(String product) {
		productAmountMap.put(product, productAmountMap.getOrDefault(product, 0) + 1);
	}

	private void removeProduct(String product) {
		productAmountMap.remove(product);
	}

	private void tellCount(String product) {
		System.out.println("<" + product + ">" + productAmountMap.getOrDefault(product, 0) + "개요");
	}

	private void tellPrice(int price) {
		System.out.println("네 " + price + "원이요");
	}

	private void tellProductOrdered(String product) {
		System.out.println("<" + product + ">시키셨어요");
	}

	private void tellProductNotOrdered(String product) {
		System.out.println("<" + product + ">안 시키셨어요");
	}
	private void yes() {
		System.out.println("네");
	}

}
