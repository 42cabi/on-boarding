package com.example.lent;

import com.example.lent.dto.LentRequest;
import com.example.lent.dto.LentResponse;

public interface LentService {
	LentResponse lent(LentRequest request);
}
