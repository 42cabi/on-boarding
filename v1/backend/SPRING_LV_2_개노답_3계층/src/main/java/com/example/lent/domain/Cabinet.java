package com.example.lent.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

/*Entity가 뭘까요?*/
@Getter
@AllArgsConstructor
public class Cabinet {
	private Long cabinetId;
	private CabinetStatus cabinetStatus;

}
