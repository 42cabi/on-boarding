package com.example.algorithmbot;

public class BinarySearch implements Algorithm {
	private static final String SOLUTION = "반띵 ㄱㄱ";
	private static final String ALGORITHM_NAME = "BinarySearch";

	public boolean isSolution(Algorithm algorithm) {
		return (algorithm instanceof BinarySearch);
	}

	public String getSolution() {
		return SOLUTION;
	}

	public String getName() {
		return ALGORITHM_NAME;
	}
}
