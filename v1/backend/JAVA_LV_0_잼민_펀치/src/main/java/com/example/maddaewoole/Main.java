package com.example.maddaewoole;

public class Main {

	public static void main(String[] args) {
		Jpark2 jpark2 = new Jpark2();
		Daewoole daewoole = new Daewoole();
		int cnt = 0;
		while (true) {
			String ment = jpark2.provocate();
			int anger = daewoole.provoked(ment);
			System.out.printf("지원은 '%s'를 시전하여 대욱의 분노를 %d 증가시켰다.\n현재 대욱의 분노 수치 : %d\n\n", ment,
					anger,
					daewoole.getAngerLevel());
			cnt++;
			if (daewoole.isOverAngerLimit()) {
				System.out.printf("참지 못한 대욱은 결국 지원에게 잼민 펀치를 날렸다.\n대욱을 도발한 횟수 : %d회\n", cnt);
				break;
			}
		}
	}
}
