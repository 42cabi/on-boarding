package com.example.lent;

import com.example.lent.domain.LentHistory;

import java.util.ArrayList;
import java.util.List;

/*리포지토리는 뭘까요?*/
public class LentHistoryRepositoryImpl implements LentHistoryRepository {
	/*실제 DB를 사용하지 않으므로 내부 Collection으로 대체합니다. - Collection이 뭘까요?*/
	private static final List<LentHistory> TABLE = new ArrayList<>();

	@Override
	public LentHistory save(LentHistory lentHistory) {
		return null;
	}

	@Override
	public List<LentHistory> findAll() {
		return null;
	}
}
