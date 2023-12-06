package com.example.bot;

import lombok.Getter;
import lombok.ToString;

import java.util.List;

@Getter
@ToString
public class Order {
	private final List<String> products;
	private final OrderType type;

	public Order(List<String> products, OrderType type) {
		this.products = products;
		this.type = type;
	}

	public String getFirst() {
		return products.get(0);
	}
}
