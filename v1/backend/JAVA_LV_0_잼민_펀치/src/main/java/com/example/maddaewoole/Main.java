package com.example.maddaewoole;

public class Main {

	public static void main(String[] args) {
		Jpark2 jpark2 = new Jpark2();
		Daewoole daewoole = new Daewoole();

		while (true) {
			String ment;
			int prevokePoint;

			ment = jpark2.prevoke();
			prevokePoint = daewoole.bePrevoked(ment);
			System.out.printf("지원은 '%s'를 시전하여 대욱의 분노를 %d 중가시켰다.\n", ment, prevokePoint);
			jpark2.checkPoint(daewoole.getAngryPoint());
			System.out.println();
			if (!daewoole.getPunchFlag()) {
				daewoole.punch();
				break;
			}
		}
	}
}
