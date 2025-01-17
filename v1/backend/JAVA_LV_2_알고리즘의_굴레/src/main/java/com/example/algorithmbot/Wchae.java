package com.example.algorithmbot;

import java.util.HashMap;
import java.util.Optional;
import java.util.Random;

public class Wchae {
	private final HashMap<Algorithm, Integer> algorithmMap;
	private final String unsolvecMessage;
	private final Integer HUNDRED_PERCENT;

	public Wchae() {
		algorithmMap = new HashMap<>();
		unsolvecMessage = "스트레스 받네…";
		HUNDRED_PERCENT = 10;
	}

	public String solveAlgorithm(Algorithm algorithm) {
		Random random = new Random();

		Optional<HashMap.Entry<Algorithm, Integer>> entryOptional = algorithmMap.entrySet().stream()
				.filter(entry -> entry.getKey().isSolution(algorithm))
				.findAny();

		if (entryOptional.isPresent()) {
			if (entryOptional.get().getValue() + random.nextInt(HUNDRED_PERCENT) >= HUNDRED_PERCENT) {
				algorithmMap.put(algorithm, entryOptional.get().getValue() + 1);
				return (algorithm.getSolution());
			} else
				return (unsolvecMessage);
		} else {
			algorithmMap.put(algorithm, 1);
			return (unsolvecMessage);
		}
	}
}
