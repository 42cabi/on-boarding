package com.example.maddaewoole;

import java.util.Arrays;
import java.util.List;
import java.util.Random;

/**
 * 1. 도발 문자열을 list 형식으로 들고있다. - 당신의 ~ , 코딩 , 오늘 저녁은 2. 메서드를 갖고있다. - 도발하기 -> 갖고있는 문자열중, 랜덤한 하나를 꺼내
 * 반환한다.
 */
public class Jpark2 {

	private static final String[] provocationStrings = {
			"당신의 지각비, 회식비로 대체되었다",
			"코딩 그렇게 하는거 아닌데",
			"오늘 저녁은 감탄계"
	};

	private List<String> provocations = Arrays.asList(provocationStrings);

	String prorvoke() {
		return provocations.get(new Random().nextInt(provocations.size()));
	}

	private String randomChoice(List<String> choices) {
		Random random = new Random();
		return choices.get(random.nextInt(choices.size()));
	}
}
