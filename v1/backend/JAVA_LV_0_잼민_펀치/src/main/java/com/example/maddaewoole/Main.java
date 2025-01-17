package com.example.maddaewoole;

public class Main {

	public static void main(String[] args) {
		Jpark2 jpark2 = new Jpark2();
		Daewoole daewoole = new Daewoole();
		final String PRINT_MENT = "지원은 '%s'를 시전하여 대욱의 분노를 %d 중가시켰다.\n";

		while (!daewoole.isDaewooleAngered()) {
			String ment = jpark2.provoke();
			int prevokePoint = daewoole.bePrevoked(ment);

			System.out.printf(PRINT_MENT, ment, prevokePoint);
			jpark2.checkPoint(daewoole.getAngryPoint());
			System.out.println();
		}
		daewoole.punch();
	}
}
