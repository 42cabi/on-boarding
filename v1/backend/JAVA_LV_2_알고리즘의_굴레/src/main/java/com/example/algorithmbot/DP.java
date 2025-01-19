package com.example.algorithmbot;

public class DP implements Algorithm {
	private static final String SOLUTION = "누가 첫날부터 DP문제를 들고옵니까";
	private static final String ALGORITHM_NAME = "DP";

	public boolean isSolution(Algorithm algorithm) {
		return (algorithm instanceof DP);
	}

	public String getSolution() {
		return SOLUTION;
	}

	public String getName() {
		return ALGORITHM_NAME;
	}
}
