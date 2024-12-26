package com.example.maddaewoole;

import static com.example.maddaewoole.Jpark2.MENT1;
import static com.example.maddaewoole.Jpark2.MENT2;
import static com.example.maddaewoole.Jpark2.MENT3;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

public class Daewoole {

	private int angerLevel;
	private int angerLimit;
	private Map<String, Integer> angerMap;

	public Daewoole() {
		angerLevel = 0;
		angerLimit = new Random().nextInt(41) + 80;
		angerMap = new HashMap<>();
		angerMap.put(MENT1, new Random().nextInt(21));
		angerMap.put(MENT2, new Random().nextInt(21) + 10);
		angerMap.put(MENT3, new Random().nextInt(21) + 30);
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
		return angerLevel;
	}
}
