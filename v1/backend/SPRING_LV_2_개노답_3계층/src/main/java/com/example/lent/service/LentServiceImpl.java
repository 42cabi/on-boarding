package com.example.lent.service;

import com.example.lent.domain.Cabinet;
import com.example.lent.domain.CabinetStatus;
import com.example.lent.domain.LentHistory;
import com.example.lent.dto.LentRequest;
import com.example.lent.dto.LentResponse;
import com.example.lent.repository.LentHistoryRepository;
import com.example.lent.testutil.CabinetRepository;
import com.example.lent.testutil.UserRepository;
import java.time.LocalDateTime;
import lombok.RequiredArgsConstructor;

/*서비스는 뭘까요?*/
@RequiredArgsConstructor
public class LentServiceImpl implements LentService {
	private static final int LENT_PERIOD = 31;

	private final LentHistoryRepository lentHistoryRepository;
	private final CabinetRepository cabinetRepository;
	private final UserRepository userRepository;

	@Override
	public LentResponse lent(LentRequest request) {
		if (isBannedUser(request.getUserId())) {
			throw new RuntimeException("사용 정지상태인 유저입니다.");
		}
		if (isAlreadyLent(request.getCabinetId())) {
			throw new RuntimeException("이미 사용 중인 사물함입니다.");
		}
		if (isAlreadyLentUser(request.getUserId())) {
			throw new RuntimeException("이미 대여 중인 유저입니다.");
		}

		Cabinet cabinet = cabinetRepository.findAll().stream()
				.filter(e -> e.getCabinetId().equals(request.getCabinetId()))
				.findAny()
				.orElseThrow(() -> new RuntimeException("존재하지 않는 사물함입니다."));
		cabinet.lent();
		LentHistory lentHistory = new LentHistory(
				request.getCabinetId(),
				request.getUserId(),
				userRepository.findById(request.getUserId()).getName(),
				request.getCreatedAt(),
				request.getCreatedAt().plusDays(LENT_PERIOD)
		);
		lentHistoryRepository.save(lentHistory);

		return new LentResponse(
				lentHistory.getLentHistoryId(),
				lentHistory.getCabinetId(),
				lentHistory.getLentUserName(),
				lentHistory.getCreatedAt(),
				lentHistory.getExpiredAt()
		);
	}

	private boolean isBannedUser(Long userId) {
		return userRepository.findById(userId).isBanned();
	}

	private boolean isAlreadyLent(Long cabinetId) {
		Cabinet cabinet = cabinetRepository.findAll().stream()
				.filter(e -> e.getCabinetId().equals(cabinetId))
				.findAny()
				.orElse(null);
		return (cabinet != null && !cabinet.isAvailable());
	}

	private boolean isAlreadyLentUser(Long userId) {
		return lentHistoryRepository.findAll().stream()
				.anyMatch(e -> e.getUserId().equals(userId));
	}
}
