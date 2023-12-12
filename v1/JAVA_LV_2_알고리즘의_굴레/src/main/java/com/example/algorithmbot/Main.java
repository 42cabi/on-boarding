package com.example.algorithmbot;

import java.util.Arrays;
import java.util.List;

public class Main {

	public static void main(String[] args) {

		List<Algorithm> algorithms = Arrays.asList(
				new DP(), new DFS(), new BFS(), new BinarySearch(), new TwoPointer());
		Wchae wchae = new Wchae();

		for (int day = 1; day <= 20; day++) {
			Algorithm algorithm1 = algorithms.get((int)Math.floor(Math.random() * 5));
			Algorithm algorithm2 = algorithms.get((int)Math.floor(Math.random() * 5));
			wchae.solveAlgorithm(algorithm1);
			wchae.solveAlgorithm(algorithm2);
			System.out.println("오늘의 알고리즘 : " +
					algorithm1.getClass().getSimpleName() + ", " +
					algorithm2.getClass().getSimpleName());
			System.out.println("우주 : " +
					wchae.solveAlgorithm(algorithm1) + " / " +
					wchae.solveAlgorithm(algorithm2) + "\n");
		}
	}
}
