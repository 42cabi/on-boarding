package com.example.algorithmbot;

import java.util.ArrayList;
import java.util.Random;

enum AlgorithmType {
	BFS("BFS"),
	DFS("DFS"),
	BINARY("BinarySearch"),
	DP("DP"),
	TWOPOINTER("TwoPointer");

	private final String type;

	AlgorithmType(String type) {
		this.type = type;
	}

	public String getType() {
		return type;
	}
}

public class Main {

	public static void main(String[] args) {
		Random random = new Random();
		Wchae wchae = new Wchae();
		ArrayList<Algorithm> list = new ArrayList<>();

		list.add(new BFS());
		list.add(new DFS());
		list.add(new BinarySearch());
		list.add(new DP());
		list.add(new TwoPointer());

		for (int i = 0; i < 20; i++) {
			int firstAlgorithm, secondAlgorithm;
			String firstMsg, secondMsg;

			firstAlgorithm = random.nextInt(list.size());
			secondAlgorithm = random.nextInt(list.size());
			printAlgorithm(firstAlgorithm, secondAlgorithm);

			firstMsg = wchae.solveAlgorithm(list.get(firstAlgorithm));
			secondMsg = wchae.solveAlgorithm(list.get(secondAlgorithm));
			printSolvedMents(firstMsg, secondMsg);
		}
	}

	static void printAlgorithm(int firstAlgorithm, int secondAlgorithm) {
		AlgorithmType[] algorithmTypes = {AlgorithmType.BFS, AlgorithmType.DFS, AlgorithmType.BINARY, AlgorithmType.DP, AlgorithmType.TWOPOINTER};
		String DEFAULT = "오늘의 알고리즘 : ";
		String DELIMITER = ", ";

		System.out.println(DEFAULT + algorithmTypes[firstAlgorithm].getType() + DELIMITER + algorithmTypes[secondAlgorithm].getType());
	}

	static void printSolvedMents(String firstMsg, String secondMsg) {
		String DEFAULT = "우주 : ";
		String DELIMITER = " / ";

		System.out.println(DEFAULT + firstMsg + DELIMITER + secondMsg);
		System.out.println();
	}
}
