package com.example.algorithmbot;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Main {

	public static void main(String[] args) {
		BFS bfs = new BFS();
		DFS dfs = new DFS();
		TwoPointer twoPointer = new TwoPointer();
		BinarySearch binarySearch = new BinarySearch();
		DP dp = new DP();

		List<Algorithm> algorithm = new ArrayList<>(
				Arrays.asList(bfs, dfs, twoPointer, binarySearch, dp));
		List<String> todayAlgorithm = new ArrayList<>(
				Arrays.asList("BFS", "DFS", "TwoPointer", "BinaraySearch", "DP"));

		Wchae wchae = new Wchae();

		for (int i = 0; i < 20; i++) {
			int today1 = (int) ((Math.random() * 10) % 5);
			int today2 = (int) ((Math.random() * 10) % 5);

			Algorithm todayAlgorithm1 = algorithm.get(today1);
			Algorithm todayAlgorithm2 = algorithm.get(today2);

			System.out.println(
					"오늘의 알고리즘 : " + todayAlgorithm.get(today1) + ", " + todayAlgorithm.get(today2));
			System.out.println(
					"우주 : " + wchae.solveAlgorithm(todayAlgorithm1) + " / " + wchae.solveAlgorithm(
							todayAlgorithm2));
		}

	}
}
