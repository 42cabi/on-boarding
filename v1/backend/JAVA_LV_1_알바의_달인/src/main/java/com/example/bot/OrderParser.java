package com.example.bot;

import java.util.ArrayList;
import java.util.List;

public class OrderParser {
	private final List<String> products = new ArrayList<>();
	private OrderMessages orderType = null;

	public List<String> getProducts() {
		return products;
	}
	public OrderMessages getOrderType() {
		return orderType;
	}

	public void parse(String order) {
		int indexOfLessThanSign = -1;
		int indexOfStartOrderMessage = -1;
		for (int i = 0; i < order.length(); i++) {
			if (order.charAt(i) == '<') {
				indexOfLessThanSign = i;
				continue;
			}
			if (order.charAt(i) == '>') {
				products.add(order.substring(indexOfLessThanSign + 1, i));
				indexOfLessThanSign = -1;
				continue;
			}
			if (indexOfLessThanSign >= 0) {
				continue;
			}
			if (indexOfStartOrderMessage < 0) {
				indexOfStartOrderMessage = i;
			}
			if (i == order.length() - 1 || order.charAt(i + 1) == '<') {
				String orderMessage = order.substring(indexOfStartOrderMessage, i + 1);
				orderType = OrderMessages.fromString(orderMessage);
			}
		}
		if (orderType == null) {
			orderType = OrderMessages.ADD;
		}
	}

}
