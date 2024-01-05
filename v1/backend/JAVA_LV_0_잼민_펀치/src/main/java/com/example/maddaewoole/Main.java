package com.example.maddaewoole;

public class Main {

	public static void main(String[] args) {
		Jpark2 jiwon = new Jpark2();
		Daewoole daewook = new Daewoole(jiwon.getStr());

		int attack_cnt = 0;
		while (true){
			String attack = jiwon.prov();
			int daewookAnger = daewook.beProvinced(attack);
			System.out.println("지원은 " + attack + "를 시전하여 대욱의 분노를 " + daewookAnger + " 증가시켰다.");
			daewook.now_anger += daewookAnger;
			System.out.println("현재 대욱의 분노 수치 : " + daewook.now_anger);
			if (daewook.now_anger > daewook.getAnger_threshold())
				break;
			attack_cnt++;
		}
		System.out.println("대욱을 도발한 횟수 : " + attack_cnt + "회");
	}
}
