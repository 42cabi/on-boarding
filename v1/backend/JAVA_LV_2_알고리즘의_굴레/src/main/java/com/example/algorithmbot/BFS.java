package com.example.algorithmbot;

public class BFS implements Algorithm {
	private static final String SOLUTION = "주변부터 둘러보기";

	public boolean isSolution(Algorithm algorithm) {
		return (algorithm instanceof BFS);
	}

	public String getSolution() {
		return SOLUTION;
	}
}
