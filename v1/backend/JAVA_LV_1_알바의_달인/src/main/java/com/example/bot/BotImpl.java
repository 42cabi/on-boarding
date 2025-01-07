package com.example.bot;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class BotImpl implements JiwonBehavior {

	List<String> orders = new ArrayList<>();

	@Override
	public void takeOrder(String order) {
		if (order.equals("얼마야?")) {
			result();
			return;
		}

		String[] words = order.split("<|>");

		if (isAddOrder(words)) {
			addOrder(words);
		} else if (isRemoveOrder(words)) {
			removeOrder(words);
		} else if (isCheckOrder(words)) {
			checkOrder(words);
		} else if (isCountOrder(words)) {
			countOrder(words);
		} else {
			throw new RuntimeException("알 수 없는 명령입니다: " + order);
		}
	}

	@Override
	public void result() {
		int totalPrice = orders.stream().mapToInt(String::length).sum();
		System.out.printf("총 %d원 입니다\n", (totalPrice * 1000));
	}

	private boolean isAddOrder(String[] words) {
		return (words.length == 4 && (words[2].equals("랑") || words[2].equals("이랑")))
				|| words.length == 2;
	}

	private void addOrder(String[] words) {
		int total = words[1].length();
		orders.add(words[1]);
		if (words.length == 4) {
			total += words[3].length();
			orders.add(words[3]);
		}
		System.out.printf("네 %d원이요\n", (total * 1000));
	}

	private boolean isRemoveOrder(String[] words) {
		return words.length == 3 && words[2].equals("빼");
	}

	private void removeOrder(String[] words) {
		if (orders.contains(words[1])) {
			orders.removeIf(word -> word.equals(words[1]));
			System.out.println("네");
		} else {
			System.out.printf("<%s>안 시키셨어요\n", words[1]);
		}
	}

	private boolean isCheckOrder(String[] words) {
		return words.length == 3 && words[2].equals("시켰나?");
	}

	private void checkOrder(String[] words) {
		if (orders.contains(words[1])) {
			System.out.printf("<%s>시키셨어요\n", words[1]);
		} else {
			System.out.printf("<%s>안 시키셨어요\n", words[1]);
		}
	}

	private boolean isCountOrder(String[] words) {
		return words.length == 3 && words[2].equals("몇 개야?");
	}

	private void countOrder(String[] words) {
		if (orders.contains(words[1])) {
			int count = Collections.frequency(orders, words[1]);
			System.out.printf("<%s>%d개요\n", words[1], count);
		} else {
			System.out.printf("<%s>안 시키셨어요\n", words[1]);
		}
	}
}