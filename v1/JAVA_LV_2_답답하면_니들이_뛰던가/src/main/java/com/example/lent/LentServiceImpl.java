package com.example.lent;

import com.example.lent.domain.Cabinet;
import com.example.lent.domain.CabinetStatus;
import com.example.lent.domain.LentHistory;
import com.example.lent.domain.User;
import com.example.lent.dto.LentRequest;
import com.example.lent.dto.LentResponse;
import com.example.lent.testutil.CabinetRepository;
import com.example.lent.testutil.UserRepository;
import lombok.RequiredArgsConstructor;

import java.util.Optional;

@RequiredArgsConstructor
public class LentServiceImpl implements LentService {

	private static Long pkCounter = 1L; //사실 repository-DBMS의 책임이지만 귀찮아서 여기다 달았음
	private final LentHistoryRepository lentHistoryRepository;
	private final CabinetRepository cabinetRepository;
	private final UserRepository userRepository;

	@Override
	public LentResponse lent(LentRequest request) {
		User user = userRepository.findById(request.getUserId());
		if (user.isBanned()) {
			throw new RuntimeException("사용 정지상태인 유저입니다.");
		}
		Cabinet cabinet = cabinetRepository.findById(request.getCabinetId());
		if (cabinet.getCabinetStatus().equals(CabinetStatus.FULL)) {
			throw new RuntimeException("이미 사용 중인 사물함입니다.");
		}
		Optional<LentHistory> optionalHistory = lentHistoryRepository.findAll().stream()
				.filter(e -> e.getLentUserName().equals(user.getName()))
				.findAny(); // 혹은 lentHistory 한 건에 대한 조회 로직
		if (optionalHistory.isPresent()) {
			throw new RuntimeException("이미 대여 중인 유저입니다.");
		}

		cabinet.changeStatus(CabinetStatus.FULL);
		Cabinet savedCabinet = cabinetRepository.save(cabinet);
		LentHistory lentHistory = lentHistoryRepository.save(new LentHistory(pkCounter++, cabinet.getCabinetId(), user.getName(), request.getCreatedAt(), request.getCreatedAt().plusDays(31)));
		return new LentResponse(lentHistory.getLentHistoryId(), savedCabinet.getCabinetId(), lentHistory.getLentUserName(), lentHistory.getCreatedAt(), lentHistory.getExpiredAt());
	}
}
