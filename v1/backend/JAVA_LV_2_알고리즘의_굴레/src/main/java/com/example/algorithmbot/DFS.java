package com.example.algorithmbot;

public class DFS implements Algorithm {
	private static final String SOLUTION = "나는 한 놈씩 조져";

	public boolean isSolution(Algorithm algorithm) {
		return (algorithm instanceof DFS);
	}

	public String getSolution() {
		return SOLUTION;
	}
}
