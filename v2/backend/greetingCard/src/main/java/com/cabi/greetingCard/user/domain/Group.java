package com.cabi.greetingCard.user.domain;

import java.util.Arrays;
import java.util.List;
import lombok.Getter;

@Getter
public enum Group {
	EVERYONE("everyone"),
	;

	private final String name;

	Group(String name) {
		this.name = name;
	}

	public static List<String> getNames() {
		return Arrays.stream(Group.values())
				.map(Group::getName)
				.toList();
	}
}
