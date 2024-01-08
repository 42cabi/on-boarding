package com.example.algorithmbot;

public class BinarySearch implements Algorithm {

    @Override
    public boolean isSolution(Algorithm algorithm) {
        return algorithm instanceof BinarySearch;
    }

    @Override
    public String getSolution() {
        return "반띵 ㄱㄱ";
    }
}
