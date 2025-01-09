package com.example.algorithmbot;

public class DP implements Algorithm {

	private final String solution;

	DP() {
		solution = "누가 첫날부터 DP문제를 들고옵니까";
	}

	@Override // 기능 : 컴파일러가 오타 등을 확인함(상위 클래스에 메서드 존재 확인), 가독성과 유지보수 향상
	public boolean isSolution(Algorithm algorithm) {
		return (algorithm instanceof DP);
	}

	@Override
	public String getSolution() {
		return (this.solution);
	}

}
