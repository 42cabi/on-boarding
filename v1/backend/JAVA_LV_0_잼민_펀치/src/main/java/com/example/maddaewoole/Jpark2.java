package com.example.maddaewoole;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class Jpark2 {
	private final static String PROVOKE_MENT1 = "당신의 지각비, 회식비로 대체되었다";
	private final static String PROVOKE_MENT2 = "코딩 그렇게 하는거 아닌데";
	private final static String PROVOKE_MENT3 = "오늘 저녁은 감탄계";
	private final static String POINTCHECK_MENT = "현재 대욱의 분노 수치 : %d\n";
	private final ArrayList<String> ments;

	public Jpark2() {
		ments = new ArrayList<>(List.of(PROVOKE_MENT1, PROVOKE_MENT2, PROVOKE_MENT3));
	}

	public String provoke() {
		Random random = new Random();
		int idx = random.nextInt(ments.size());

		return (ments.get(idx));
	}

	public void checkPoint(int angryPoint) {
		System.out.printf(POINTCHECK_MENT, angryPoint);
	}
}
