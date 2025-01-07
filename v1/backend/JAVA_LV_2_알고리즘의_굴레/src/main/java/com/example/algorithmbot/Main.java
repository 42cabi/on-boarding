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
			System.out.println(wchae.solveAlgorithm(first));
			System.out.println(wchae.solveAlgorithm(second));
			System.out.println();
		}
	}
}
