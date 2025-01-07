package com.example.maddaewoole;

import java.util.HashMap;
import java.util.Random;

public class Daewoole {
	private final int angryLimit;
	private final HashMap<String, Integer> prevokePoints;
	private int angryPoint;
	private int prevokeCount;
	private boolean punchFlag;

	Daewoole() {
		Random random = new Random();
		angryPoint = 0;
		angryLimit = random.nextInt(41) + 80;
		prevokeCount = 0;
		punchFlag = true;
		prevokePoints = new HashMap<String, Integer>();

		prevokePoints.put("당신의 지각비, 회식비로 대체되었다", random.nextInt(21));
		prevokePoints.put("코딩 그렇게 하는거 아닌데", random.nextInt(21) + 10);
		prevokePoints.put("오늘 저녁은 감탄계", random.nextInt(21) + 30);
	}

	public int getAngryPoint() {
		return (angryPoint);
	}

	public boolean getPunchFlag() {
		return (punchFlag);
	}

	public int bePrevoked(String ment) {
		angryPoint += prevokePoints.get(ment);
		prevokeCount++;
		if (angryPoint > angryLimit)
			punchFlag = false;
		return (prevokePoints.get(ment));
	}

	public void punch() {
		System.out.println("참지 못한 대욱은 결국 지원에게 잼민 펀치를 날렸다."); // println은 무조건 string으로만 출력
		System.out.printf("대욱을 도발한 횟수 : %d회\n", prevokeCount); //출력 서식을 사용하려면 printf
	}
}
