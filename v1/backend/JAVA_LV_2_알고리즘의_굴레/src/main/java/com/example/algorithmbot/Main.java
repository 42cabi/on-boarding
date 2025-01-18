package com.example.algorithmbot;

import java.util.List;

public class Main {

	public static void main(String[] args) {
		Wchae wchae = new Wchae();
		List<Algorithm> algorithmList = List.of(new BFS(), new DFS(), new TwoPointer(),
				new BinarySearch(), new DP());

		for (int i = 0; i < 20; i++) {
			Algorithm first = algorithmList.get((int) (Math.random() * 5));
			Algorithm second = algorithmList.get((int) (Math.random() * 5));
			printTodaysAlgorithm(first, second);
			printWchaeSolveResult(wchae.solveAlgorithm(first), wchae.solveAlgorithm(second));
			System.out.println();
		}
	}

	public static void printTodaysAlgorithm(Algorithm first, Algorithm second) {
		System.out.printf("오늘의 알고리즘 : %s, %s\n", first.getClass().getSimpleName(),
				second.getClass().getSimpleName());
	}

	public static void printWchaeSolveResult(String firstResult, String secondResult) {
		System.out.printf("우주 : %s / %s\n", firstResult, secondResult);
	}
}
