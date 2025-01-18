package com.example.algorithmbot;

import java.util.HashMap;
import java.util.Map;

public class Wchae {
	// Constants --------------------------------------------------------------
	private static final double INITIAL_PROBABILITY = 0.1;
	private static final double PROBABILITY_INCREMENT = 0.1;
	private static final double MAX_PROBABILITY = 1.0;
	// ------------------------------------------------------------------------

	private Map<Algorithm, Integer> algorithmMap = new HashMap<>();

	public void solveAlgorithm(Algorithm algorithm) {
	}

	private int getSolveCount(Algorithm algorithm) {
		return algorithmMap.entrySet().stream()
				.filter(entry -> entry.getKey().isSolution(algorithm))
				.map(Map.Entry::getValue)
				.findAny()
				.orElse(0);
	}

	private double calculateSolveProbability(int solveCount) {
		return Math.min(INITIAL_PROBABILITY + PROBABILITY_INCREMENT * solveCount,
				MAX_PROBABILITY);
	}

	private boolean trySolving(double solveProbability) {
		return Math.random() < solveProbability;
	}
}
