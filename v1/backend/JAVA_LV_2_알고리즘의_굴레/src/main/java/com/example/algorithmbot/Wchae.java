package com.example.algorithmbot;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

public class Wchae {

	private final Map<Algorithm, Integer> algorithmMap = new HashMap<>();

	public String solveAlgorithm(Algorithm haveToSolve) {
		Optional<Algorithm> today1 = algorithmMap.keySet().stream()
				.filter(x -> x.isSolution(haveToSolve)).findFirst();

		if (today1.isPresent()) {
			int solved_cnt = algorithmMap.getOrDefault(haveToSolve, 0);
			algorithmMap.put(haveToSolve, solved_cnt + 1);
			double percentage = Math.random();
			if ((double) solved_cnt * 0.1 > percentage) {
				return haveToSolve.getSolution();
			} else {
				return "스트레스 받네...";
			}
		} else {
			algorithmMap.put(haveToSolve, 1);
			return "스트레스 받네...";
		}
	}

}
