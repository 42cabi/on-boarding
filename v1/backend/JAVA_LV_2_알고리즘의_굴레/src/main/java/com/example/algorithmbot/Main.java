package com.example.algorithmbot;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;

public class Main {

	public static void main(String[] args) {
		List<Algorithm> algorithms = List.of(
				new BFS(),
				new BinarySearch(),
				new DFS(),
				new DP(),
				new TwoPointer()
		);
		int totalDays = 20;
		int dailyProblems = 2;

		Wchae wchae = new Wchae();
		Random random = new Random();
		for (int day = 0; day < totalDays; day++) {
			List<Algorithm> todayAlgorithms = new ArrayList<>();
			List<String> todayResult = new ArrayList<>();
			for (int problemCount = 0; problemCount < dailyProblems; problemCount++) {
				Algorithm chosenAlgorithm = algorithms.get(random.nextInt(algorithms.size()));
				todayAlgorithms.add(chosenAlgorithm);
				todayResult.add(wchae.solveAlgorithm(chosenAlgorithm));
			}

			String algorithmNames = todayAlgorithms.stream().map(Algorithm::getName)
					.collect(Collectors.joining(","));
			System.out.println("오늘의 알고리즘 : " + algorithmNames);
			String result = String.join(",", todayResult);
			System.out.println("우주 : " + result);
			System.out.println();
		}
	}
}
