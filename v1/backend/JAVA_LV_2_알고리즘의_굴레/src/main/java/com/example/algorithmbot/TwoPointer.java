package com.example.algorithmbot;

public class TwoPointer implements Algorithm {
	private static final String SOLUTION = "너에게 닿기를…";

	public boolean isSolution(Algorithm algorithm) {
		return (algorithm instanceof TwoPointer);
	}

	public String getSolution() {
		return SOLUTION;
	}
}
