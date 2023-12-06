package com.example.lent.testutil;

import com.example.lent.domain.Cabinet;

import java.util.ArrayList;
import java.util.List;

public class CabinetRepository {
	/*실제 DB를 사용하지 않으므로 내부 Collection으로 대체합니다. - Collection이 뭘까요?*/
	private final List<Cabinet> TABLE = new ArrayList<>();

	/*왜 copyOf를 사용할까요?*/
	public List<Cabinet> findAll() {
		return List.copyOf(TABLE);
	}

	public Cabinet save(Cabinet cabinet) {
		TABLE.removeIf(e -> e.getCabinetId().equals(cabinet.getCabinetId()));
		TABLE.add(cabinet);
		return cabinet;
	}

	public Cabinet findById(Long cabinetId) {
		return TABLE.stream()
				.filter(e -> e.getCabinetId().equals(cabinetId))
				.findAny()
				.orElseThrow(() -> new RuntimeException("사물함이 없어요!"));
	}
}
