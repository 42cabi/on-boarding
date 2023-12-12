package com.example.algorithmbot;

public class TwoPointer implements Algorithm {

	@Override
	public boolean isSolution(Algorithm algorithm) {
		return (algorithm instanceof TwoPointer);
	}

	@Override
	public String getSolution() {
		return "너에게 닿기를...";
	}
}
