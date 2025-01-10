package com.example.maddaewoole;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class Jpark2 {
	private final ArrayList<String> ments; // final을 붙이면 arraylist 객체의 주소를 변경할 수 없는거지 ArrayList 클래스 내부 메서드를 이용한 값 변경은 가능하다

	Jpark2() {
		ments = new ArrayList<>(List.of("당신의 지각비, 회식비로 대체되었다", "코딩 그렇게 하는거 아닌데", "오늘 저녁은 감탄계"));
	}

	public String prevoke() {
		Random random = new Random();
		int idx = random.nextInt(ments.size());

		return (ments.get(idx));
	}

	public void checkPoint(int angryPoint) {
		System.out.printf("현재 대욱의 분노 수치 : %d\n", angryPoint);
	}
}
