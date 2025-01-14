package com.example.maddaewoole;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;

/**
 * 1. 멤버변수 -> 현재 분노 수치, 임계값, 도발 분노 map 1-1. 분노 수치 : 내가 얼마나 화낫나? 초기값은 0이다. 1-2. 임계갑 : 이 이상 넘으면 펀치,
 * 80~120 사이의 랜덤값. 1-3. 도발 분노 맵 : 특정 문자열마다, 분노수치를 얻는 맵이다. -> 1. 다신의 ~ -> 0 ~ 20 10 ~ 30 30 ~ 50
 * <p>
 * 각 랜덤값은, ?생성자? 내부에서 지정되어야 한다. 분노 수치에 대한 접근자(getter) -> ?? private 으로 선언된 프로퍼티를, 외부에서 접근하기 위해
 * <p>
 * 2. 도발 당하기 메서드 : 무자열을 받아서, 생성자에서 지정된 분노만큼 분노를 쌓는다.
 */
public class Daewoole {

	private int currentAngerLevel = 0;
	private int maxAngerLevel;
	private Map<String, Integer> angerLevelByProvocation = new HashMap<>();

	Daewoole(List<String> provocations) {
		maxAngerLevel = ThreadLocalRandom.current().nextInt(80, 121);
		int[] minAngerLevels = {0, 10, 30};
		int[] maxAngerLevels = {20, 30, 50};

		int provocationSize = provocations.size();
		for (int i = 0; i < provocationSize; i++) {
			angerLevelByProvocation.put(provocations.get(i), ThreadLocalRandom.current().nextInt(
					minAngerLevels[i], maxAngerLevels[i] + 1
			));
		}
	}
}
