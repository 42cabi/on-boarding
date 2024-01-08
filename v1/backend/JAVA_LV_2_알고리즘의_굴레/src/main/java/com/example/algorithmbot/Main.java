package com.example.algorithmbot;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.StringJoiner;
import java.util.stream.IntStream;

public class Main {
	private static final int COUNT = 2;
	private static final int MAX_DAY = 20;

	public static void main(String[] args) {
		List<Algorithm> problems = List.of(new BFS(), new DFS(), new TwoPointer(), new BinarySearch(), new DP());

		Wchae wchae = new Wchae();
		for (int i = 0; i < MAX_DAY; i++) {
			List<Algorithm> todayProblems = selectTwoProblems(problems);
			List<String> solveResults = new ArrayList<>();
			printAlgorithmNames(todayProblems);

			for (Algorithm problem : todayProblems) {
				solveResults.add(wchae.solveAlgorithm(problem));
			}
			printSolveResult(solveResults);
		}
	}

	private static void printSolveResult(List<String> solveResult) {
		String result = generateResults(solveResult);
		System.out.println("우주 : " + result + System.lineSeparator());
	}

	private static String generateResults(List<String> solveResult) {
		StringJoiner joiner = new StringJoiner(" / ");
		solveResult.forEach(joiner::add);

		return joiner.toString();
	}

	private static List<Algorithm> selectTwoProblems(List<Algorithm> problems) {
		int range = problems.size();

		return IntStream.range(0, COUNT)
				.map(i -> generateRandomNumber(range))
				.mapToObj(problems::get)
				.toList();
	}

	private static int generateRandomNumber(int size) {
		Random random = new Random();
		return random.nextInt(size);
	}

	private static void printAlgorithmNames(List<Algorithm> algorithms) {
		String names = generateAlgorithmNames(algorithms);
		System.out.println("오늘의 알고리즘 : " + names);
	}

	private static String generateAlgorithmNames(List<Algorithm> algorithms) {
		StringJoiner joiner = new StringJoiner(", ");
		for (Algorithm algorithm : algorithms) {
			String name = algorithm.getClass().getSimpleName();
			joiner.add(name);
		}
		return joiner.toString();
	}
}
