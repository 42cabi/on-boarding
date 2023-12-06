package com.example.lent;

import com.example.lent.dto.LentRequest;
import com.example.lent.dto.LentResponse;
import lombok.RequiredArgsConstructor;

/*컨트롤러는 뭘까요?*/
/*컨트롤러는 왜 인터페이스가 없어도 될까요?*/
@RequiredArgsConstructor
public class LentController {
	private final LentService lentService;

	public LentResponse lent(LentRequest request) {
		return lentService.lent(request);
	}
}
