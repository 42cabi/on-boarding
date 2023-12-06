package com.example.lent;

import com.example.lent.domain.Cabinet;
import com.example.lent.domain.CabinetStatus;
import com.example.lent.domain.LentHistory;
import com.example.lent.domain.User;
import com.example.lent.dto.LentRequest;
import com.example.lent.dto.LentResponse;
import com.example.lent.testutil.CabinetRepository;
import com.example.lent.testutil.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.time.LocalDateTime;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;


public class LentTest {

	private LentController lentController;
	private LentService lentService;
	private UserRepository userRepository;
	private LentHistoryRepository lentHistoryRepository;
	private CabinetRepository cabinetRepository;

	// 내부 구현을 작성하신 후에, 아래의 주석을 해제해주세요. - 의존성 주입이 뭘까요?
	@BeforeEach
	public void setUp() {
		userRepository = new UserRepository();
		cabinetRepository = new CabinetRepository();
		lentHistoryRepository = new LentHistoryRepositoryImpl();
		lentService = new LentServiceImpl(lentHistoryRepository, cabinetRepository, userRepository);
		lentController = new LentController(lentService);
	}

	@DisplayName("지금부터 대여를 시작한다.")
	@Test
	void 테스트를_읽어보세요() {
		// given
		LocalDateTime now = LocalDateTime.now();
		Long ignoreId = 9999L;
		User wchae = new User(1L, "wchae", false);
		// 대욱은 사용 정지 상태입니다.
		User daewoole = new User(2L, "daewoole", true);
		User jpark2 = new User(3L, "jpark2", false);

		// 1번 사물함은 사용중입니다.
		Cabinet cabinet1 = new Cabinet(1L, CabinetStatus.FULL);
		Cabinet cabinet2 = new Cabinet(2L, CabinetStatus.AVAILABLE);
		Cabinet cabinet3 = new Cabinet(3L, CabinetStatus.AVAILABLE);
		userRepository.save(wchae);
		userRepository.save(daewoole);
		userRepository.save(jpark2);
		cabinetRepository.save(cabinet1);
		cabinetRepository.save(cabinet2);
		cabinetRepository.save(cabinet3);

		// 지원은 10일 전에 cabinet1을 대여했습니다.
		lentHistoryRepository.save(new LentHistory(ignoreId, cabinet1.getCabinetId(), jpark2.getName(),
				now.minusDays(10), now.plusDays(10)));

		LentRequest wrongRequestCabinetAlreadyOccupied = new LentRequest(cabinet1.getCabinetId(), wchae.getUserId(), now);
		LentRequest wrongRequestUserAlreadyHasLent = new LentRequest(cabinet2.getCabinetId(), jpark2.getUserId(), now);
		LentRequest wrongRequestUserBanned = new LentRequest(cabinet3.getCabinetId(), daewoole.getUserId(), now);
		LentRequest validRequestByWchae = new LentRequest(cabinet3.getCabinetId(), wchae.getUserId(), now);


		// 익셉션은 어떻게 던질까요?
		assertThatThrownBy(() -> lentController.lent(wrongRequestCabinetAlreadyOccupied))
				.isInstanceOf(RuntimeException.class)
				.hasMessage("이미 사용 중인 사물함입니다.");
		assertThatThrownBy(() -> lentController.lent(wrongRequestUserAlreadyHasLent))
				.isInstanceOf(RuntimeException.class)
				.hasMessage("이미 대여 중인 유저입니다.");
		assertThatThrownBy(() -> lentController.lent(wrongRequestUserBanned))
				.isInstanceOf(RuntimeException.class)
				.hasMessage("사용 정지상태인 유저입니다.");
		LentResponse response = lentController.lent(validRequestByWchae);

		// reponse 검사
		assertThat(response.getLentHistoryId()).isNotNull();
		assertThat(response.getCabinetId()).isEqualTo(validRequestByWchae.getCabinetId());
		assertThat(response.getUserName()).isEqualTo(wchae.getName());
		assertThat(response.getLentAt()).isEqualTo(validRequestByWchae.getCreatedAt());
		assertThat(response.getExpiredAt()).isEqualTo(validRequestByWchae.getCreatedAt().plusDays(31));

		// lentHistory 검사
		LentHistory wchaeHistory = lentHistoryRepository.findAll().stream()
				.filter(e -> e.getLentUserName().equals(wchae.getName()))
				.findAny().orElseThrow(() -> new RuntimeException("테스트 실패 !! 대여 기록이 없습니다!!"));
		assertThat(wchaeHistory.getCabinetId()).isEqualTo(validRequestByWchae.getCabinetId());
		assertThat(wchaeHistory.getLentUserName()).isEqualTo(wchae.getName());
		assertThat(wchaeHistory.getCreatedAt()).isEqualTo(validRequestByWchae.getCreatedAt());
		assertThat(wchaeHistory.getExpiredAt()).isEqualTo(validRequestByWchae.getCreatedAt().plusDays(31));

		// cabinet 검사
		Cabinet cabinet = cabinetRepository.findAll().stream()
				.filter(e -> e.getCabinetId().equals(wchaeHistory.getCabinetId()))
				.findAny().orElseThrow(() -> new RuntimeException("테스트 실패 !! 사물함이 없습니다!!"));
		assertThat(cabinet.getCabinetStatus()).isEqualTo(CabinetStatus.FULL);
	}
}
