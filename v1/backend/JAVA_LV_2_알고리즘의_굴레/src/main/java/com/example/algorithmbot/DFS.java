package com.example.algorithmbot;

public class DFS implements Algorithm {

	public boolean isSolution(Algorithm algorithm) {
		return algorithm instanceof DFS;
	}

	@Override
	public String getSolution() {
		return "너에게 닿기를...";
	}
}
