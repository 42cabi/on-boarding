package com.example.maddaewoole;

import java.util.HashMap;
import java.util.Random;

public class Daewoole {
	private final static int ANGRYLIMIT_DEFAULT = 80;
	private final static int ANGRYLIMIT_RANGE = 41;
	private final static int PREVOKE_RANGE = 21;
	private final static int PREVOKE_DEFAULT1 = 10;
	private final static int PREVOKE_DEFAULT2 = 30;
	private final static String PREVOKE_MENT1 = "당신의 지각비, 회식비로 대체되었다";
	private final static String PREVOKE_MENT2 = "코딩 그렇게 하는거 아닌데";
	private final static String PREVOKE_MENT3 = "오늘 저녁은 감탄계";
	private final static String PUNCH_MENT = "참지 못한 대욱은 결국 지원에게 잼민 펀치를 날렸다.\n대욱을 도발한 횟수 : %d회\n";
	private final HashMap<String, Integer> prevokePoints;
	private final int angryLimit;
	private int angryPoint;
	private int prevokeCount;

	public Daewoole() {
		Random random = new Random();
		angryPoint = 0;
		angryLimit = random.nextInt(ANGRYLIMIT_RANGE) + ANGRYLIMIT_DEFAULT;
		prevokeCount = 0;
		prevokePoints = new HashMap<>();

		prevokePoints.put(PREVOKE_MENT1, random.nextInt(PREVOKE_RANGE));
		prevokePoints.put(PREVOKE_MENT2, random.nextInt(PREVOKE_RANGE) + PREVOKE_DEFAULT1);
		prevokePoints.put(PREVOKE_MENT3, random.nextInt(PREVOKE_RANGE) + PREVOKE_DEFAULT2);
	}

	public int getAngryPoint() {
		return (angryPoint);
	}

	public boolean isDaewooleAngered() {
		return angryPoint > angryLimit;
	}

	public int bePrevoked(String ment) {
		angryPoint += prevokePoints.get(ment);
		prevokeCount++;
		return prevokePoints.get(ment);
	}

	public void punch() {
		System.out.printf(PUNCH_MENT, prevokeCount); //출력 서식을 사용하려면 printf
	}
}
