package com.example.lent.repository;

import com.example.lent.domain.LentHistory;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/*리포지토리는 뭘까요?*/
public class LentHistoryRepositoryImpl implements LentHistoryRepository {
    private static Long ID_SEQUENCE = 1L;
    /*실제 DB를 사용하지 않으므로 내부 Collection으로 대체합니다. - Collection이 뭘까요?*/
    private static final List<LentHistory> TABLE = new ArrayList<>();

    /**
     * @param lentHistory cabinetId, userId, lentUserName, createAt, expiredAt
     * @return
     */
    @Override
    public LentHistory save(LentHistory lentHistory) {
        // update
        if (lentHistory.getLentHistoryId() != null) {
            TABLE.removeIf(history -> history.getLentHistoryId().equals(lentHistory.getLentHistoryId()));
            TABLE.add(lentHistory);
            return lentHistory;
        }
        // new
        lentHistory.id(ID_SEQUENCE++);
        TABLE.add(lentHistory);
        return lentHistory;
    }

    @Override
    public List<LentHistory> findAll() {
        /*
         * unmodifiable vs copyOf vs new ArrayList<>(TABLE)
         *
         * unmodifiable~
         * 복사본의 추가, 삭제, 갱신 등의 변경 작업은 불가.
         * 사본 리스트를 변경하려고 하면 UnsupportedOperationException이 발생
         * 원본 변경 시 복사본도 변경
         *
         * copyOf~
         * 복사본의 추가, 삭제, 갱신 등의 변경 작업은 불가.
         * 사본 리스트를 변경하려고 하면 UnsupportedOperationException이 발생
         * 원본 변경해도 복사본은 독립적
         *
         * new Array~
         * 변경 가능, 복사본은 독립적
         * */
        return Collections.unmodifiableList(TABLE);
    }

}
