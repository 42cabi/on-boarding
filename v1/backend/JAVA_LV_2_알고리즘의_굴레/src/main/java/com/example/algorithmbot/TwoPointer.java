package com.example.algorithmbot;

public class TwoPointer implements Algorithm {

	private final String solution;

	TwoPointer() {
		solution = "너에게 닿기를…";
	}

	@Override
	public boolean isSolution(Algorithm algorithm) {
		return (algorithm instanceof TwoPointer);
	}

	@Override
	public String getSolution() {
		return (this.solution);
	}

}
