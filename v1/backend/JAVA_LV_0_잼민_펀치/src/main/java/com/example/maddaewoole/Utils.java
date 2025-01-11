package com.example.maddaewoole;

import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;

public class Utils {

	public static int getRandomNumber(int min, int max) {
		Random random = ThreadLocalRandom.current();
		return random.nextInt(min, max);
	}
}
