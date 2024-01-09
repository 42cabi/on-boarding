package com.example.bot;

import java.util.HashMap;
import java.util.Map;


public class BotImpl implements JiwonBehavior {

	private final Map<String, Integer> product = new HashMap<>();

	@Override
	public void takeOrder(String order) {
		if (order.equals("얼마야?")) {
			result();
			return;
		}
		int loc = order.indexOf('>');
		String name = order.substring(1, loc);
		order = order.substring(loc + 1);

		if (order.equals("빼")) {
			outProduct(name);
		} else if (order.equals("시켰나?")) {
			didIOrdered(name);
		} else if (order.equals("몇 개야?")) {
			howManyOrdered(name);
		} else {
			orderProducts(order, name);
		}
	}

	private void orderProducts(String order, String name) {
		int price = name.length() * 1000;
		if (product.containsKey(name)) {
			product.put(name, product.get(name) + 1);
		} else {
			product.put(name, 1);
		}

		if (order.indexOf('랑') >= 0) {
			int loc = order.indexOf('<');
			name = order.substring(loc + 1, order.length() - 1);
			price += name.length() * 1000;
			if (product.containsKey(name)) {
				product.put(name, product.get(name) + 1);
			} else {
				product.put(name, 1);
			}

		}
		System.out.println("네 " + price + "원이요");
	}

	private void outProduct(String name) {
		if (product.containsKey(name)) {
			product.remove(name);
			System.out.println("네");
		} else {
			System.out.println("<" + name + ">안 시키셨어요");
		}
	}

	private void didIOrdered(String name) {
		if (product.containsKey(name)) {
			System.out.println("<" + name + ">시키셨어요");
		} else {
			System.out.println("<" + name + ">안 시키셨어요");
		}
	}

	private void howManyOrdered(String name) {
		if (product.containsKey(name)) {
			System.out.println("<" + name + ">" + product.get(name) + "개요");
		} else {
			System.out.println("<" + name + ">안 시키셨어요");
		}
	}

	@Override
	public void result() {
		int total = 0;
		for (String key : product.keySet()) {
			total += key.length() * 1000 * product.get(key);
		}
		System.out.println("총 " + total + "원 입니다");

	}
}
