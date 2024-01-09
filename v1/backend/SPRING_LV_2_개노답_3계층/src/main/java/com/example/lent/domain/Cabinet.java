package com.example.lent.domain;

import lombok.Getter;

/*Entity가 뭘까요?*/
@Getter
public class Cabinet {
    private Long cabinetId;
    private CabinetStatus cabinetStatus;

    public Cabinet(CabinetStatus status) {
        this.cabinetId = null;
        this.cabinetStatus = status;
    }

    public void id(Long id) {
        this.cabinetId = id;
    }

    public void setStatus(CabinetStatus cabinetStatus) {
        this.cabinetStatus = cabinetStatus;
    }
}
