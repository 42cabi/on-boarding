package com.cabi.greetingCard.user.service;

import com.cabi.greetingCard.dto.GroupSearchDTO;
import com.cabi.greetingCard.dto.UserSearchDto;
import com.cabi.greetingCard.exception.ExceptionStatus;
import com.cabi.greetingCard.user.domain.Group;
import com.cabi.greetingCard.user.domain.User;
import com.cabi.greetingCard.user.repository.UserRepository;
import jakarta.servlet.http.Cookie;
import java.util.ArrayList;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

/**
 * 이 어노테이션은 또 멀까? 컴포넌트 서치가 머더라? Autowired는 또 머지..
 */
@Service
@RequiredArgsConstructor
public class UserService {

	private final UserRepository userRepository;

	/**
	 * 새로운 유저를 등록합니다
	 * <p>
	 *
	 * @param name
	 * @param password
	 */
	public void registerUser(String name, String password) {
		verifyDuplicatedName(name);
		User user = new User(name, password);
		userRepository.save(user);
	}

	/**
	 * 중복된 name 검증 기능
	 *
	 * @param name
	 */
	public void verifyDuplicatedName(String name) {
		if (userRepository.existsUserByName(name)) {
			throw ExceptionStatus.DUPLICATED_NAME.asGreetingException();
		}
	}

	/**
	 * 로그인을 시도합니다
	 * <p>
	 * 진짜 있는 유저일까? 비밀번호는 맞게 입력했을까?, 성공하면 쿠키를 주자!
	 */
	public Cookie login(String name, String password) {
		User user = userRepository.findByName(name)
				.orElseThrow(ExceptionStatus.LOGIN_FAIL::asGreetingException);
		if (!user.getPassword().equals(password)) {
			throw ExceptionStatus.LOGIN_FAIL.asGreetingException();
		}

		Cookie cookie = new Cookie("userName", user.getName());
		cookie.setPath("/");
		cookie.setMaxAge(60 * 60 * 24 * 365);
		cookie.setHttpOnly(true);

		return cookie;
	}

	/**
	 * 파라미터를 포함하고 있는 user정보들 중 name만을 List 형식으로 반환
	 *
	 * @param prefix
	 * @param userName
	 * @return
	 */
	public UserSearchDto searchUserByName(String prefix, String userName) {
		List<String> names = userRepository.findByNameStartingWith(prefix).stream()
				.map(User::getName)
				.filter(name -> !name.equals(userName))
				.toList();

		return new UserSearchDto(names);
	}

	public GroupSearchDTO searchGroupByName(String prefix) {
		List<String> groupNames = Group.getNames().stream()
				.filter(name -> name.startsWith(prefix))
				.toList();

		return new GroupSearchDTO(groupNames);
	}
}
