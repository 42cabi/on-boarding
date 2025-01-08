package com.example.algorithmbot;

public class DP implements Algorithm {

	public boolean isSolution(Algorithm algorithm) {
		return algorithm instanceof DP;
	}

	@Override
	public String getSolution() {
		return "누가 첫날부터 DP문제를 들고옵니까";
	}
}
