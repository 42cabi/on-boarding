package com.example.bot;

import java.util.HashMap;
import java.util.Iterator;

public class BotImpl implements JiwonBehavior {

	private final HashMap<String, Integer> menu;

	private BotImpl() {
		menu = new HashMap<String, Integer>();
	}

	@Override
	public void takeOrder(String order) {
		switch (Parse.caseCheck(order)) {
			case ADD_ONE:
				this.addOne(Parse.split(order));
				break;
			case ADD_TWO:
				this.addTwo(Parse.split(order));
				break;
			case DELETE:
				this.delete(Parse.split(order));
				break;
			case FiND:
				this.find(Parse.split(order));
				break;
			case COUNT:
				this.count(Parse.split(order));
				break;
			case END:
				this.result();
				break;
		}
	}

	@Override
	public void result() {
		int ret = 0;
		Iterator<String> it = menu.keySet().iterator();

		while (it.hasNext()) {
			String key = it.next(); // next를 호출하면 현재의 key를 불러올면서 이터레이터는 다음 값을 가리키게 된다.

			ret += key.length() * menu.get(key);
		}
		System.out.printf("총 %d원이요\n", ret * 1000);
	}

	private enum ReqType {
		ADD_ONE, ADD_TWO, DELETE, FIND, COUNT, END
	}

}

//parse 클래스를 만든다
//
