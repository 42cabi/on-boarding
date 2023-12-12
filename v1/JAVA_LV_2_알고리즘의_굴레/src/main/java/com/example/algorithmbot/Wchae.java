package com.example.algorithmbot;

import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;

public class Wchae {

	private Map<Algorithm, Integer> algorithmMap = new HashMap<>();

	public String solveAlgorithm(Algorithm algorithm) {
		Entry<Algorithm, Integer> findAlgorithm = algorithmMap.entrySet().stream()
				.filter(algo -> algo.getKey().isSolution(algorithm))
				.findFirst().orElse(null);
		if (findAlgorithm == null) {
			algorithmMap.put(algorithm, 1);
			return "스트레스 받네...";
		} else {
			int percent = findAlgorithm.getValue() * 10;
			algorithmMap.put(findAlgorithm.getKey(), findAlgorithm.getValue() + 1);
			if (Math.random() * 100 <= percent)
				return findAlgorithm.getKey().getSolution();
			return "스트레스 받네...";
		}
	}
}
