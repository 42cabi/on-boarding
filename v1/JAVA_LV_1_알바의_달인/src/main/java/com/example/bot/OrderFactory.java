package com.example.bot;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class OrderFactory {
	private final static List<String> types = Arrays.stream(OrderKeyword.values()).map(OrderKeyword::keyword).toList();
	public static Order createOrder(String order) {
		List<String> parsed = parse(order);
		OrderType type = getOrderType(parsed);
		List<String> products = getProducts(parsed);
		return new Order(products, type);
	}

	private static List<String> parse(String order) {
		StringBuilder sb = new StringBuilder();
		List<String> result = new ArrayList<>();
		char[] charArray = order.toCharArray();

		for (char c : charArray) {
			if (c == '<') {
				if (!sb.isEmpty()) {
					result.add(sb.toString());
					sb.setLength(0);
				}
				continue;
			}
			if (c == '>') {
				result.add(sb.toString());
				sb.setLength(0);
				continue;
			}
			sb.append(c);
		}
		if (!sb.isEmpty())
			result.add(sb.toString());
		return result;
	}

	private static OrderType getOrderType(List<String> parsed) {
		String keyword = parsed.stream()
				.filter(types::contains)
				.findFirst().orElse("");


		switch (keyword) {
			case "이랑", "랑" -> {
				return OrderType.MULTI_ADD;
			}
			case "빼" -> {
				return OrderType.REMOVE;
			}
			case "시켰나?" -> {
				return OrderType.QUERY_EXISTENCE;
			}
			case "몇 개야?" -> {
				return OrderType.QUERY_COUNT;
			}
			case "얼마야?" -> {
				return OrderType.RESULT;
			}
			default -> {
				return OrderType.ADD;
			}
		}
	}

	private static List<String> getProducts(List<String> parsed) {
		return parsed.stream()
				.filter(e -> types.stream().noneMatch(e::contains))
				.collect(Collectors.toList());
	}
}
