package com.example.bot;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class BotImpl implements JiwonBehavior {

	private static final int PRICE_UNIT = 1000;
	private List<Product> products = new ArrayList<>();

	// <오감자>랑<새우깡> => 네 6000원이요
	// <우라라랑>이랑<가므마마마>
	@Override
	public void takeOrder(String orderInput) {
		// 모든 Command를 체크하면서 주문 문자열을 분할
		Output output = new Output();
		List<String> productNames = generateProductNames(orderInput);
		List<Product> orders = generateOrders(productNames);

		String commandInput = orderInput.replaceAll("<.*?>", "").trim();
		Command command = Command.from(commandInput);

		if (command.getType() == OrderType.CALCULATE) {
			addToCart(productNames);
			int price = calculateProducts(productNames);
			output.printCalculateResult(price);
		}
	}

	private void addToCart(List<String> productNames) {
		productNames.forEach(name -> products.add(Product.from(name)));
	}

	private int calculateProducts(List<String> productNames) {
		return productNames.stream()
				.findFirst()
				.map(name -> products.stream().filter(product -> product.getName().equals(name)).mapToInt(Product::getPrice).sum())
				.orElse(0);
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
