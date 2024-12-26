package com.example.maddaewoole;

import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;

public class Utils {

	static final String MENT1 = "당신의 지각비, 회식비로 대체되었다";
	static final String MENT2 = "코딩 그렇게 하는거 아닌데";
	static final String MENT3 = "오늘 저녁은 감탄계";

	public static int getRandomNumber(int min, int max) {
		Random random = ThreadLocalRandom.current();
		return random.nextInt(min, max);
	}
}
