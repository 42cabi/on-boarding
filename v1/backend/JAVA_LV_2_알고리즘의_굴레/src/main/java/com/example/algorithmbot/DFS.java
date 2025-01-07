package com.example.algorithmbot;

public class DFS implements Algorithm {

	@Override
	public boolean isSolution(Algorithm algorithm) {
		return algorithm instanceof DFS;
	}

	@Override
	public String getSolution() {
		return "나는 한 놈씩 조져";
	}
}
