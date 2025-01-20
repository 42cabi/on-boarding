package com.example.lent.repository;

import com.example.lent.domain.LentHistory;
import java.util.ArrayList;
import java.util.List;

/*리포지토리는 뭘까요?*/
public class LentHistoryRepositoryImpl implements LentHistoryRepository {

	/*실제 DB를 사용하지 않으므로 내부 Collection으로 대체합니다. - Collection이 뭘까요?*/
	private static final List<LentHistory> TABLE = new ArrayList<>();
	private Long ID_SEQUENCE = 1L;

	@Override
	public LentHistory save(LentHistory lentHistory) {
		lentHistory.setId(ID_SEQUENCE++);
		TABLE.add(lentHistory);
		return lentHistory;
	}

	@Override
	public List<LentHistory> findAll() {
		return List.copyOf(TABLE);
	}
}
