package com.example.maddaewoole;

import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;

public class Utils {

	public static int getRandomNumber(int min, int max) {
		Random random = ThreadLocalRandom.current();
		return random.nextInt(min, max);
	}

	public static void printJpark2ProvokeDaewoole(String ment, int anger, int daewooleAngerLevel) {
		System.out.printf("지원은 '%s'를 시전하여 대욱의 분노를 %d 증가시켰다.\n현재 대욱의 분노 수치 : %d\n\n", ment,
				anger,
				daewooleAngerLevel);
	}

	public static void printDaewoolePunchedJpark2(int provokedCnt) {
		System.out.printf("참지 못한 대욱은 결국 지원에게 잼민 펀치를 날렸다.\n대욱을 도발한 횟수 : %d회\n", provokedCnt);
	}
}
