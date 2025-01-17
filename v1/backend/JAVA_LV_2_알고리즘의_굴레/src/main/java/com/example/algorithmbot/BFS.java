package com.example.algorithmbot;

public class BFS implements Algorithm {

	private final String solution;

	BFS() {
		solution = "주변부터 둘러보기";
	}

	@Override // 기능 : 컴파일러가 오타 등을 확인함(상위 클래스에 메서드 존재 확인), 가독성과 유지보수 향상
	public boolean isSolution(Algorithm algorithm) {
		return (algorithm instanceof BFS);
	}

	@Override
	public String getSolution() {
		return (this.solution);
	}

}
