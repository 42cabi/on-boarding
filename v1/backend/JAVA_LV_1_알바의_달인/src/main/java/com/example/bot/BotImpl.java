package com.example.bot;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class BotImpl implements JiwonBehavior {
	Output output = new Output();
	private static final int PRICE_UNIT = 1000;
	private List<Product> products = new ArrayList<>();

	@Override
	public void takeOrder(String orderInput) {
		List<String> productNames = generateProductNames(orderInput);
		List<Product> orders = generateOrders(productNames);
		Product product = !orders.isEmpty() ? orders.get(0) : null;

		String commandInput = orderInput.replaceAll("<.*?>", "").trim();
		Command command = Command.from(commandInput);

		if (command.getType() == OrderType.CALCULATE) {
			addToCart(productNames);
			int price = calculateProducts(productNames);
			output.printCalculateResult(price);
		}
		if (command.getType() == OrderType.FIND) {
			boolean result = isContain(product);
			output.printFindResult(product, result);
		}
		if (command.getType() == OrderType.REMOVE) {
			boolean result = removeProducts(product);
			output.printRemoveResult(product, result);
		}
		if (command.getType() == OrderType.COUNT) {
			int count = getProductCount(product);
			output.printCountResult(product, count);
		}
		if (command.getType() == OrderType.RESULT) {
			result();
		}
	}

	private void addToCart(List<String> productNames) {
		productNames.forEach(name -> products.add(Product.from(name)));
	}

	private int calculateProducts(List<String> productNames) {
		return productNames.stream()
				.mapToInt(name -> name.length() * PRICE_UNIT)
				.sum();
	}

	private boolean removeProducts(Product product) {
		if (!isContain(product)) {
			return false;
		}
		return products.removeIf(p -> p.equals(product));
	}

	private List<Product> generateOrders(List<String> productNames) {
		return productNames.stream()
				.map(Product::from)
				.toList();
	}

	private static List<String> generateProductNames(String orderInput) {
		List<String> productNames = new ArrayList<>();  // 제품 이름 목록

		Matcher matcher = Pattern.compile("<(.*?)>")
				.matcher(orderInput);
		while (matcher.find()) {
			productNames.add(matcher.group(1));
		}
		return productNames;
	}


	private boolean isContain(Product product) {
		return products.contains(product);
	}

	private int getProductCount(Product product) {
		return (int) products.stream()
				.filter(element -> element.equals(product))
				.count();
	}

	@Override
	public void result() {
		int totalAmount = products.stream()
				.mapToInt(Product::getPrice)
				.sum();

		System.out.println("총 " + totalAmount + "원 입니다");
		products.clear();
	}
}
