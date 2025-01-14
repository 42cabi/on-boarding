package com.example.lent;

import static com.example.lent.domain.CabinetConfig.LENDING_PERIOD;

import com.example.lent.domain.Cabinet;
import com.example.lent.domain.CabinetStatus;
import com.example.lent.domain.LentHistory;
import com.example.lent.domain.User;
import com.example.lent.dto.LentRequest;
import com.example.lent.dto.LentResponse;
import com.example.lent.exception.CabinetAlreadyLentException;
import com.example.lent.exception.CabinetNotExistException;
import com.example.lent.exception.UserAlreadyLentException;
import com.example.lent.exception.UserBannedException;
import com.example.lent.testutil.CabinetRepository;
import com.example.lent.testutil.UserRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;

/*서비스는 뭘까요?*/
@RequiredArgsConstructor
public class LentServiceImpl implements LentService {

	private final LentHistoryRepository lentHistoryRepository;
	private final CabinetRepository cabinetRepository;
	private final UserRepository userRepository;

	private static void checkCabinetAvailabilityAndUserStatus(Cabinet findCabinet,
			List<LentHistory> lentHistoryList,
			User findUser) {
		// 사물함의 상태가 사용중인 경우
		if (findCabinet.getCabinetStatus() == CabinetStatus.FULL) {
			throw new CabinetAlreadyLentException();
		}

		// 유저가 현재 사물함을 대여중인 경우
		if (isUserLent(lentHistoryList, findUser)) {
			throw new UserAlreadyLentException();
		}

		// 사용 정지 상태인 유저인 경우
		if (findUser.isBanned()) {
			throw new UserBannedException();
		}
	}

	private static boolean isUserLent(List<LentHistory> lentHistoryList, User findUser) {
		return lentHistoryList.stream()
				.findFirst()
				.filter(lentHistory -> lentHistory.getLentUserName() == findUser.getName())
				.isPresent();
	}

	@Override
	public LentResponse lent(LentRequest request) {
		Cabinet findCabinet = cabinetRepository.findAll()
				.stream()
				.filter(cabinet -> cabinet.getCabinetId() == request.getCabinetId())
				.findFirst()
				.orElseThrow(() -> new CabinetNotExistException());

		User findUser = userRepository.findById(request.getUserId());
		List<LentHistory> lentHistoryList = lentHistoryRepository.findAll();

		checkCabinetAvailabilityAndUserStatus(findCabinet, lentHistoryList, findUser);

		findCabinet.changeStatus(CabinetStatus.FULL);
		cabinetRepository.save(findCabinet);

		LentHistory lentHistory = lentHistoryRepository.save(new LentHistory(
				findCabinet.getCabinetId(),
				findUser.getUserId(),
				findUser.getName(),
				request.getCreatedAt(),
				request.getCreatedAt().plusDays(LENDING_PERIOD)));

		return new LentResponse(lentHistory.getLentHistoryId(),
				lentHistory.getCabinetId(),
				findUser.getName(),
				lentHistory.getCreatedAt(),
				lentHistory.getExpiredAt());
	}
}
