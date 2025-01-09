package com.example.algorithmbot;

public class DFS implements Algorithm {

	private final String solution;

	DFS() {
		solution = "나는 한 놈씩 조져";
	}

	@Override
	public boolean isSolution(Algorithm algorithm) {
		return (algorithm instanceof DFS);
	}

	@Override
	public String getSolution() {
		return (this.solution);
	}
}
