package com.example.lent.repository;

import com.example.lent.domain.LentHistory;

import java.util.List;

public interface LentHistoryRepository {
	LentHistory save(LentHistory lentHistory);

	List<LentHistory> findAll();
}
