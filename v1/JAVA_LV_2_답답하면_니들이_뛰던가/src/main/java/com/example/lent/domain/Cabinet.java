package com.example.lent.domain;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

/*Entity가 뭘까요?*/
@Getter
public class Cabinet {
	private Long cabinetId;
	private CabinetStatus cabinetStatus;

	public Cabinet(Long cabinetId, CabinetStatus cabinetStatus) {
		this.cabinetId = cabinetId;
		this.cabinetStatus = cabinetStatus;
	}

	public void changeStatus(CabinetStatus cabinetStatus) {
		this.cabinetStatus = cabinetStatus;
	}
}
