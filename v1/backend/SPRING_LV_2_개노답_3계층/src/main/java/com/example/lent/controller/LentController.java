package com.example.lent.controller;

import com.example.lent.dto.LentRequest;
import com.example.lent.dto.LentResponse;
import com.example.lent.service.LentService;

/*컨트롤러는 뭘까요?*/
/*컨트롤러는 왜 인터페이스가 없어도 될까요?*/
public class LentController {
	private LentService lentService;

	public LentResponse lent(LentRequest request) {
		return null;
	}
}
