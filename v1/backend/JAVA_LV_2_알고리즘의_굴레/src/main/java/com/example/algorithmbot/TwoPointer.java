package com.example.algorithmbot;

public class TwoPointer implements Algorithm {
	private static final String SOLUTION = "너에게 닿기를…";
	private static final String ALGORITHM_NAME = "TwoPointer";

	public boolean isSolution(Algorithm algorithm) {
		return (algorithm instanceof TwoPointer);
	}

	public String getSolution() {
		return SOLUTION;
	}

	public String getName() {
		return ALGORITHM_NAME;
	}
}
