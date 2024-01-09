package com.example.lent.dto;

import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.Getter;

/*DTO가 뭘까요?*/
@AllArgsConstructor
@Getter
public class LentResponse {
    private Long lentHistoryId;
    private Long cabinetId;
    private String userName;
    private LocalDateTime lentAt;
    private LocalDateTime expiredAt;
}
