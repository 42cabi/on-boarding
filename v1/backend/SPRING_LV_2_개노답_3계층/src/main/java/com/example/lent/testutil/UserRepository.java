package com.example.lent.testutil;

import com.example.lent.domain.User;

import java.util.ArrayList;
import java.util.List;

public class UserRepository {
	private static Long ID_SEQUENCE = 1L;
	/*실제 DB를 사용하지 않으므로 내부 Collection으로 대체합니다. - Collection이 뭘까요?*/
	private final List<User> TABLE = new ArrayList<>();

	/*왜 copyOf를 사용할까요?*/
	public List<User> findAll() {
		return List.copyOf(TABLE);
	}

	public User findById(Long userId) {
		return TABLE.stream()
				.filter(e -> e.getUserId().equals(userId))
				.findAny()
				.orElseThrow(() -> new RuntimeException("누가 없는 사람 찾으래!"));
	}

	public User save(User user) {
		if (user.getUserId() != null) {
			TABLE.removeIf(c -> c.getUserId().equals(user.getUserId()));
			TABLE.add(user);
			return user;
		}
		user.id(ID_SEQUENCE++);
		TABLE.add(user);
		return user;
	}

}
