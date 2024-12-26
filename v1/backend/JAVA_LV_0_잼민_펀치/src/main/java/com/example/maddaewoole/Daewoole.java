package com.example.maddaewoole;

import static com.example.maddaewoole.Utils.MENT1;
import static com.example.maddaewoole.Utils.MENT2;
import static com.example.maddaewoole.Utils.MENT3;

import java.util.HashMap;
import java.util.Map;

public class Daewoole {

	private int angerLevel;
	private final int angerLimit;
	private final Map<String, Integer> angerMap;

	public Daewoole() {
		angerLevel = 0;
		angerLimit = Utils.getRandomNumber(80, 121);
		angerMap = new HashMap<>();
		angerMap.put(MENT1, Utils.getRandomNumber(0, 21));
		angerMap.put(MENT2, Utils.getRandomNumber(10, 31));
		angerMap.put(MENT3, Utils.getRandomNumber(30, 51));
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
