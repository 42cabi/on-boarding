package com.example.maddaewoole;

import static com.example.maddaewoole.Jpark2.MENT1;
import static com.example.maddaewoole.Jpark2.MENT2;
import static com.example.maddaewoole.Jpark2.MENT3;

import java.util.HashMap;
import java.util.Map;

public class Daewoole {

	private static final int ANGER_LIMIT_MIN = 80;
	private static final int ANGER_LIMIT_MAX = 121;
	private static final int MENT1_ANGER_MIN = 0;
	private static final int MENT1_ANGER_MAX = 21;
	private static final int MENT2_ANGER_MIN = 10;
	private static final int MENT2_ANGER_MAX = 31;
	private static final int MENT3_ANGER_MIN = 30;
	private static final int MENT3_ANGER_MAX = 51;

	private final int angerLimit;
	private final Map<String, Integer> angerMap;
	private int angerLevel;

	public Daewoole() {
		angerLevel = 0;
		angerLimit = Utils.getRandomNumber(ANGER_LIMIT_MIN, ANGER_LIMIT_MAX);
		System.out.printf("이번 대욱의 분노 임계값은 %d입니다.\n\n", angerLimit);
		angerMap = new HashMap<>();
		angerMap.put(MENT1, Utils.getRandomNumber(MENT1_ANGER_MIN, MENT1_ANGER_MAX));
		angerMap.put(MENT2, Utils.getRandomNumber(MENT2_ANGER_MIN, MENT2_ANGER_MAX));
		angerMap.put(MENT3, Utils.getRandomNumber(MENT3_ANGER_MIN, MENT3_ANGER_MAX));
	}

	public int provoked(String ment) {
		if (ment.equals(MENT1) || ment.equals(MENT2) || ment.equals(MENT3)) {
			angerLevel += angerMap.get(ment);
			return angerMap.get(ment);
		}
		System.out.println(ment + " 이라는 도발 멘트는 없습니다");
		return 0;
	}

	public boolean isOverAngerLimit() {
		return this.angerLevel >= this.angerLimit;
	}

	public int getAngerLevel() {
		return this.angerLevel;
	}
}
