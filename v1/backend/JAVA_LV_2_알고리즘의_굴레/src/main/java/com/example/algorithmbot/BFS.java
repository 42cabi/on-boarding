package com.example.algorithmbot;

public class BFS implements Algorithm {

	@Override
	public boolean isSolution(Algorithm algorithm) {
		return algorithm instanceof BFS;
	}

	@Override
	public String getSolution() {
		return "주변부터 둘러보기";
	}
}
