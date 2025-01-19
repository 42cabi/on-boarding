package com.example.algorithmbot;

public class BFS implements Algorithm {
	private static final String SOLUTION = "주변부터 둘러보기";
	private static final String ALGORITHM_NAME = "BFS";

	public boolean isSolution(Algorithm algorithm) {
		return (algorithm instanceof BFS);
	}

	public String getSolution() {
		return SOLUTION;
	}

	public String getName() {
		return ALGORITHM_NAME;
	}
}
