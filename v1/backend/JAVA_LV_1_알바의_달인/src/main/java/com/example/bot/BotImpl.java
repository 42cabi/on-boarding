package com.example.bot;

import java.util.HashMap;
import java.util.Iterator;

enum ReqType {
	ADD_ONE, ADD_TWO, DELETE, FIND, COUNT, END
}

public class BotImpl implements JiwonBehavior {

	private final HashMap<String, Integer> menu;

	BotImpl() {
		menu = new HashMap<String, Integer>();
	}

	@Override
	public void takeOrder(String order) {
		switch (Parser.caseCheck(order)) {
			case ADD_ONE:
				this.addOne(Parser.split(order));
				break;
			case ADD_TWO:
				this.addTwo(Parser.split(order));
				break;
			case DELETE:
				this.delete(Parser.split(order));
				break;
			case FIND:
				this.find(Parser.split(order));
				break;
			case COUNT:
				this.count(Parser.split(order));
				break;
			case END:
				this.result();
				break;
		}
	}

	private void addOne(String[] order) {
		if (menu.containsKey(order[0]))
			menu.put(order[0], menu.get(order[0]) + 1);
		else
			menu.put(order[0], 1);
		System.out.printf("네 %d원이요\n", order[0].length() * 1000);
	}

	private void addTwo(String[] order) {
		for (int i = 0; i < order.length; i++) {
			if (menu.containsKey(order[i]))
				menu.put(order[i], menu.get(order[i]) + 1);
			else
				menu.put(order[i], 1);
		}
		System.out.printf("네 %d원이요\n", order[0].length() * 1000 + order[1].length() * 1000);
	}

	private void delete(String[] order) {
		if (menu.containsKey(order[0])) {
			menu.remove(order[0]);
			System.out.println("네");
		} else
			System.out.println("<" + order[0] + ">" + "안 시키셨어요");
	}

	private void find(String[] order) {
		if (menu.containsKey(order[0])) {
			System.out.println("<" + order[0] + ">시키셨어요");
		} else
			System.out.println("<" + order[0] + ">안 시키셨어요");
	}

	private void count(String[] order) {
		if (menu.containsKey(order[0]))
			System.out.println("<" + order[0] + ">" + menu.get(order[0]) + "개요");
		else
			System.out.println("<" + order[0] + ">안 시키셨어요");
	}


	@Override
	public void result() {
		int ret = 0;
		Iterator<String> it = menu.keySet().iterator();

		while (it.hasNext()) {
			String key = it.next(); // next를 호출하면 현재의 key를 불러올면서 이터레이터는 다음 값을 가리키게 된다.

			ret += key.length() * menu.get(key);
		}
		System.out.printf("총 %d원 입니다\n", ret * 1000);
	}
}

class Parser {

	public static String[] split(String order) {
		String[] ret;
		ret = order.split(">");
		if (ret.length > 1 && ret[1].indexOf('<') != -1)
			ret[1] = ret[1].substring(ret[1].indexOf('<') + 1);
		ret[0] = ret[0].substring(1);
		return ret;
	}

	public static ReqType caseCheck(String order) {
		if (order.charAt(order.length() - 1) == '>') {
			if (order.split(">").length == 1)
				return (ReqType.ADD_ONE);
			else
				return (ReqType.ADD_TWO);
		} else if (order.charAt(order.length() - 1) == '?') {
			if (order.charAt(order.length() - 2) == '나')
				return (ReqType.FIND);
			if (order.charAt(order.length() - 3) == '마')
				return (ReqType.END);
			else
				return (ReqType.COUNT);
		} else
			return (ReqType.DELETE);
	}
}

