package com.example.maddaewoole;

import static com.example.maddaewoole.Utils.MENT1;
import static com.example.maddaewoole.Utils.MENT2;
import static com.example.maddaewoole.Utils.MENT3;

import java.util.ArrayList;
import java.util.List;

public class Jpark2 {

	private final List<String> provocations = new ArrayList<>();

	public Jpark2() {
		provocations.add(MENT1);
		provocations.add(MENT2);
		provocations.add(MENT3);
	}

	public String provocate() {
		return provocations.get(Utils.getRandomNumber(0, provocations.size()));
	}
}
