package com.example.bot;

public enum OrderMessages {
	ADD(""),
	ADD_1("랑"),
	ADD_2("이랑"),
	THROW("빼"),
	FIND("시켰나?"),
	COUNT("몇 개야?"),
	HOW_MUCH("얼마야?");

	private final String message;

	OrderMessages(String message) {
		this.message = message;
	}

	public String getMessage() {
		return message;
	}

	public static OrderMessages fromString(String message) {
		for (OrderMessages enumValue : OrderMessages.values()) {
			if (enumValue.message.equals(message)) {
				return enumValue;
			}
		}
		throw new IllegalArgumentException("No enum constant with value " + message);
	}
}
