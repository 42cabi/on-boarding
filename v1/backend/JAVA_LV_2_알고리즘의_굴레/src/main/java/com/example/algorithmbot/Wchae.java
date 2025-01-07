package com.example.algorithmbot;

import java.util.HashMap;
import java.util.Map;

public class Wchae {

	private final Map<Algorithm, Integer> algorithmMap;

	public Wchae() {
		algorithmMap = new HashMap<>();
	}

	public String solveAlgorithm(Algorithm algorithm) {
		Integer solveCount = algorithmMap.getOrDefault(algorithm, 0);
		// 풀어보지 못한 알고리즘인 경우
		if (algorithmMap.keySet()
				.stream()
				.filter(x -> x.isSolution(algorithm))
				.findAny().isEmpty()) {
			algorithmMap.put(algorithm, 1);
			return "스트레스 받네...";
		}
		// 풀어본 알고리즘인 경우
		boolean isSolved = Math.random() * 10 > solveCount;
		if (isSolved) {
			if (solveCount < 10) {
				algorithmMap.put(algorithm, solveCount + 1);
			}
			return algorithm.getSolution();
		}
		return "스트레스 받네...";
	}
}
