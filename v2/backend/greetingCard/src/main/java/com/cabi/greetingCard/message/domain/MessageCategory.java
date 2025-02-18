package com.cabi.greetingCard.message.domain;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public enum MessageCategory {

	TO_EVERYONE("@everyone", 0),
	TO_ME("to_me", 1),
	FROM_ME("from_me", 2);

	private final String name;
	private final int number;
}
