package com.example.maddaewoole;

import static com.example.maddaewoole.Utils.printDaewoolePunchedJpark2;
import static com.example.maddaewoole.Utils.printJpark2ProvokeDaewoole;

public class Main {

	public static void main(String[] args) {
		Jpark2 jpark2 = new Jpark2();
		Daewoole daewoole = new Daewoole();
		int cnt = 0;
		while (!daewoole.isOverAngerLimit()) {
			String ment = jpark2.provocate();
			int anger = daewoole.provoked(ment);
			printJpark2ProvokeDaewoole(ment, anger, daewoole.getAngerLevel());
			cnt++;
		}
		printDaewoolePunchedJpark2(cnt);
	}
}
