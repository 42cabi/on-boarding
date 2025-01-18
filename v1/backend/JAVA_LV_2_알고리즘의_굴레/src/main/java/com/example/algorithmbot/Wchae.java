package com.example.algorithmbot;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

public class Wchae {
	// Constants --------------------------------------------------------------
	private static final double INITIAL_PROBABILITY = 0.1;
	private static final double PROBABILITY_INCREMENT = 0.1;
	private static final double MAX_PROBABILITY = 1.0;
	private static final String SOLVE_FAILURE_MESSAGE = "스트레스 받네…";
	// ------------------------------------------------------------------------

	private final Map<Algorithm, Integer> algorithmMap = new HashMap<>();

	public String solveAlgorithm(Algorithm algorithm) {
		Optional<Map.Entry<Algorithm, Integer>> entryOptional = findSameAlgorithm(algorithm);
		if (entryOptional.isEmpty()) {
			registerAlgorithm(algorithm);
			return SOLVE_FAILURE_MESSAGE;
		}
		Algorithm registeredAlgorithm = entryOptional.get().getKey();
		int solveCount = entryOptional.get().getValue();
		if (trySolving(calculateSolveProbability(solveCount))) {
			incrementSolveCount(registeredAlgorithm);
			return algorithm.getSolution();
		}
		return SOLVE_FAILURE_MESSAGE;
	}

	private Optional<Map.Entry<Algorithm, Integer>> findSameAlgorithm(Algorithm algorithm) {
		return algorithmMap.entrySet().stream()
				.filter(entry -> entry.getKey().isSolution(algorithm))
				.findAny();
	}

	private double calculateSolveProbability(int solveCount) {
		return Math.min(INITIAL_PROBABILITY + PROBABILITY_INCREMENT * solveCount,
				MAX_PROBABILITY);
	}

	private boolean trySolving(double solveProbability) {
		return Math.random() < solveProbability;
	}

	private void registerAlgorithm(Algorithm algorithm) {
		algorithmMap.put(algorithm, 0);
	}

	private void incrementSolveCount(Algorithm algorithm) {
		algorithmMap.put(algorithm, algorithmMap.get(algorithm) + 1);
	}
}
