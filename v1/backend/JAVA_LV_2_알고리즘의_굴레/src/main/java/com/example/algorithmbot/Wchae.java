package com.example.algorithmbot;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.Random;

public class Wchae {
    private final Map<Algorithm, Integer> algorithmMap = new HashMap<>();
    private final Random random = new Random();

    public String solveAlgorithm(Algorithm algorithm) {
        int solveCount = algorithmMap.getOrDefault(algorithm, 0);

        Optional<Algorithm> algo = algorithmMap.keySet()
                .stream()
                .filter(elem -> elem.isSolution(algorithm))
                .findFirst();
        if (algo.isPresent()) {
            double solveProbability = solveCount * 0.1;
            double percentage = random.nextDouble();

            if (percentage < solveProbability) {
                algorithmMap.put(algorithm, solveCount + 1);
                return algorithm.getSolution();
            }
            return "스트레스 받네...";
        }
        algorithmMap.put(algorithm, solveCount + 1);
        return "스트레스 받네...";
    }
}
