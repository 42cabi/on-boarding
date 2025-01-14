package com.example.lent;

import static com.example.lent.domain.CabinetConfig.LENDING_PERIOD;

import com.example.lent.domain.Cabinet;
import com.example.lent.domain.CabinetStatus;
import com.example.lent.domain.LentHistory;
import com.example.lent.domain.User;
import com.example.lent.dto.LentRequest;
import com.example.lent.dto.LentResponse;
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
			throw new RuntimeException("이미 사용 중인 사물함입니다.");
		}

		// 유저가 현재 사물함을 대여중인 경우
		boolean isUserLent = lentHistoryList.stream()
				.findFirst()
				.filter(lentHistory -> lentHistory.getLentUserName() == findUser.getName())
				.isPresent(); // TODO: 가독성이 안좋으니 메서드로 빼기?
		if (isUserLent) {
			throw new RuntimeException("이미 대여 중인 유저입니다.");
		}

		// 사용 정지 상태인 유저인 경우
		if (findUser.isBanned()) {
			throw new RuntimeException("사용 정지상태인 유저입니다.");
		}
	}

	@Override
	public LentResponse lent(LentRequest request) {
		Cabinet findCabinet = cabinetRepository.findAll()
				.stream()
				.filter(cabinet -> cabinet.getCabinetId() == request.getCabinetId())
				.findFirst()
				.orElseThrow(() -> new RuntimeException(
						request.getCabinetId() + "번 사물함이 존재하지 않습니다"));//TODO: 커스텀 예외 클래스 만들기

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
