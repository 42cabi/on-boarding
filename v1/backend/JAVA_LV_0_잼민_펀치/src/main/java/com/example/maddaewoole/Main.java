package com.example.maddaewoole;

import java.sql.SQLOutput;
import java.util.List;

/**
 * 1. 지원은 매 시간마다 도발한다. 2. 대욱은 문자열에 대해 도발을 당한다. 3. 지원은 도발시, 대욱의 도발 수치를 확읺나다. 4. 출력도 한다. -> 인자 : 멘트,
 * 분노 수치 5. 임계점에 다다르면, 맞는다. 6. 맞았다고 출력, 인자는 도발 횟수
 * <p>
 * 지원은 ‘코딩 그렇게 하는거 아닌데’를 시전하여 대욱의 분노를 23 증가시켰다. 현재 대욱의 분노 수치 : 59
 */
public class Main {

	public static void main(String[] args) {
		Jpark2 jpark = new Jpark2();
		Daewoole daewoole = new Daewoole(jpark.getProvocations());

		int count = 0;
		while (!(daewoole.isPunch())) {
			String provocation = jpark.provoke();
			daewoole.beProvoked(provocation);
			System.out.printf("지원은 '%s'를 시전하여 대욱의 분노를 %d 증가시켰다.\n", provocation,
					daewoole.getAngerLevelByProvocation(provocation));
			System.out.printf("현재 대욱의 분노 수치 : %d\n\n", daewoole.getCurrentAngerLevel());
			count++;
		}
		System.out.println("참지 못한 대욱은 결국 지원에게 잼민 펀치를 날렸다.");
		System.out.printf("대욱을 도발한 횟수 : %d회\n", count);
	}
}
