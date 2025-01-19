package com.example.algorithmbot;

public class DP implements Algorithm {
	private static final String SOLUTION = "누가 첫날부터 DP문제를 들고옵니까";

	public boolean isSolution(Algorithm algorithm) {
		return (algorithm instanceof DP);
	}

	public String getSolution() {
		return SOLUTION;
	}
}
