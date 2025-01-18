package com.example.algorithmbot;

import java.util.HashMap;
import java.util.Map;

public class Wchae {
	private Map<Algorithm, Integer> algorithmMap = new HashMap<>();

	public void solveAlgorithm(Algorithm algorithm) {}

	private int getSolveCount(Algorithm algorithm) {
		return algorithmMap.entrySet().stream()
				.filter(entry -> entry.getKey().isSolution(algorithm))
				.map(Map.Entry::getValue)
				.findAny()
				.orElse(0);
	}
}
