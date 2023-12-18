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
		TABLE.removeIf(c -> c.getCabinetId().equals(cabinet.getCabinetId()));
		TABLE.add(cabinet);
		return cabinet;
	}
}
