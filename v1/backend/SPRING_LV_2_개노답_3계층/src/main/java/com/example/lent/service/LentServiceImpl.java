package com.example.lent.service;

import com.example.lent.domain.Cabinet;
import com.example.lent.domain.CabinetStatus;
import com.example.lent.domain.LentHistory;
import com.example.lent.domain.User;
import com.example.lent.dto.LentRequest;
import com.example.lent.dto.LentResponse;
import com.example.lent.repository.LentHistoryRepository;
import com.example.lent.testutil.CabinetRepository;
import com.example.lent.testutil.UserRepository;
import java.util.List;

/*서비스는 뭘까요?*/
public class LentServiceImpl implements LentService {
    private static final int LENT_DAYS = 31;
    private final LentHistoryRepository lentHistoryRepository;
    private final CabinetRepository cabinetRepository;
    private final UserRepository userRepository;

    public LentServiceImpl(LentHistoryRepository lentHistoryRepository, CabinetRepository cabinetRepository,
                           UserRepository userRepository) {
        this.lentHistoryRepository = lentHistoryRepository;
        this.cabinetRepository = cabinetRepository;
        this.userRepository = userRepository;
    }

    /**
     * @param request -> cabinetId, userId, localDateTime
     * @return LentResponse -> historyId, cabinetId, usrName, lentAt, expiredAt
     */
    @Override
    public LentResponse lent(LentRequest request) {
        Cabinet cabinet = cabinetRepository.findById(request.getCabinetId());
        validateCabinetStatus(cabinet);

        User user = userRepository.findById(request.getUserId());
        validateUserStatus(user);

        LentHistory lentHistory = new LentHistory(cabinet.getCabinetId(), user.getUserId(), user.getName(),
                request.getCreatedAt(), request.getCreatedAt().plusDays(LENT_DAYS));
        cabinet.setStatus(CabinetStatus.FULL);
        cabinetRepository.save(cabinet);

        if (!isAlreadyHasLentUser(user)) {
            lentHistoryRepository.save(lentHistory);
        }

        return new LentResponse(lentHistory.getLentHistoryId(), lentHistory.getCabinetId(),
                lentHistory.getLentUserName(), lentHistory.getCreatedAt(), lentHistory.getExpiredAt());
    }

    private boolean isAlreadyHasLentUser(User user) {
        List<LentHistory> lentHistories = lentHistoryRepository.findAll();
        boolean isAlreadyLentUser = lentHistories.stream()
                .anyMatch(history -> history.getUserId().equals(user.getUserId()));
        if (isAlreadyLentUser) {
            throw new RuntimeException("이미 대여 중인 유저입니다.");
        }
        return false;
    }

    /**
     * 궁금한 점 -> 1. 왜 interface를 사용할까? 2.Repository 내에서 Exception을 발생시키는 이유?
     */
    private void validateUserStatus(User user) {
        if (user.isBanned()) {
            throw new RuntimeException("사용 정지상태인 유저입니다.");
        }
    }

    private void validateCabinetStatus(Cabinet cabinet) {
        if (cabinet.getCabinetStatus() == CabinetStatus.FULL) {
            throw new RuntimeException("이미 사용 중인 사물함입니다.");
        }
    }

}
