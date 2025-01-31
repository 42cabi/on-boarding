package com.example.lent.service;

import com.example.lent.dto.LentRequest;
import com.example.lent.dto.LentResponse;
import com.example.lent.repository.LentHistoryRepository;
import lombok.RequiredArgsConstructor;

/*서비스는 뭘까요?*/
@RequiredArgsConstructor
public class LentServiceImpl implements LentService {
	private final LentHistoryRepository lentHistoryRepository;

	@Override
	public LentResponse lent(LentRequest request) {
		return null;
	}
}
