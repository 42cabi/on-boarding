package com.example.lent.controller;

import com.example.lent.dto.LentRequest;
import com.example.lent.dto.LentResponse;
import com.example.lent.service.LentService;
import lombok.RequiredArgsConstructor;

/*컨트롤러는 뭘까요?*/
/*컨트롤러는 왜 인터페이스가 없어도 될까요?*/
@RequiredArgsConstructor
public class LentController {
	private final LentService lentService;

	public LentResponse lent(LentRequest request) {
		return null;
	}
}
