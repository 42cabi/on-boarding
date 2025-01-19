package com.example.algorithmbot;

public class BinarySearch implements Algorithm {
	private static final String SOLUTION = "반띵 ㄱㄱ";

	public boolean isSolution(Algorithm algorithm) {
		return (algorithm instanceof BinarySearch);
	}

	public String getSolution() {
		return SOLUTION;
	}
}
