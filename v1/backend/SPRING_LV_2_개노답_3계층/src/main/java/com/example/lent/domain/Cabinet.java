package com.example.lent.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

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

	public boolean isAvailable() {
		return this.cabinetStatus == CabinetStatus.AVAILABLE;
	}

	public void lent() {
		this.cabinetStatus = CabinetStatus.FULL;
	}

	public void returned() {
		this.cabinetStatus = CabinetStatus.AVAILABLE;
	}
}
