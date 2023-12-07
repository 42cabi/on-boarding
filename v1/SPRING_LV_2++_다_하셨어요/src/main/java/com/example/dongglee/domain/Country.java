package com.example.dongglee.domain;

import lombok.Getter;

@Getter
public enum Country {
	KOREAN("안녕하세요"),
	USA("Hello"),
	FRANCE("Bonjour"),
	JAPAN("Ohayo")
	;

	private final String hello;

	Country(String hello) {
		this.hello = hello;
	}
}
