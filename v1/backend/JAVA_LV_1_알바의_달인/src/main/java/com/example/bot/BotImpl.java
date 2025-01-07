package com.example.bot;

import java.util.HashMap;

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

	}

	private enum ReqType {
		ADD_ONE, ADD_TWO, DELETE, FIND, COUNT, END
	}

}

//parse 클래스를 만든다
//
