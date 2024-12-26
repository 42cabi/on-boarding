package com.example.maddaewoole;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class Jpark2 {

	static final String MENT1 = "당신의 지각비, 회식비로 대체되었다";
	static final String MENT2 = "코딩 그렇게 하는거 아닌데";
	static final String MENT3 = "오늘 저녁은 감탄계";

	private final List<String> provocations = new ArrayList<>();

	public Jpark2() {
		provocations.add(MENT1);
		provocations.add(MENT2);
		provocations.add(MENT3);
	}

	public String provocate() {
		int idx = new Random().nextInt(provocations.size());
		return provocations.get(idx);
	}
}
