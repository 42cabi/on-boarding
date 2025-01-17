package com.example.algorithmbot;

public class BinarySearch implements Algorithm {

	private final String solution;

	BinarySearch() {
		solution = "반띵 ㄱㄱ";
	}

	@Override
	public boolean isSolution(Algorithm algorithm) {
		return (algorithm instanceof BinarySearch);
	}

	@Override
	public String getSolution() {
		return (this.solution);
	}
}
