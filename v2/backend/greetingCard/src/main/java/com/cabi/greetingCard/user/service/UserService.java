package com.cabi.greetingCard.user.service;

import com.cabi.greetingCard.dto.UserSearchDto;
import com.cabi.greetingCard.exception.ExceptionStatus;
import com.cabi.greetingCard.user.domain.User;
import com.cabi.greetingCard.user.repository.UserRepository;
import jakarta.servlet.http.Cookie;
import java.util.ArrayList;
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
		verifyNameLengthUnder10(name);
		verifyNameIsNumericOrAlphabet(name); // 하나의 메서드로 따로 빼는게 나을까? 코드만 복잡해지는게 아닌지?
		User user = new User(name, password);
		userRepository.save(user);
	}

	/**
	 * 유저 이름이 영어 + 숫자로만 구성되어 있는지 확인합니다.
	 *
	 * @param name
	 */
	private void verifyNameIsNumericOrAlphabet(String name) {
		if (name == null || !name.matches("^[a-zA-Z0-9]+$")) {
			throw ExceptionStatus.INVALID_NAME.asGreetingException();
		}
	}

	/**
	 * 유저 이름의 길이가 10자 이내인지 확인합니다
	 *
	 * @param name
	 */
	private void verifyNameLengthUnder10(String name) {
		if (name.length() > 10) {
			throw ExceptionStatus.INVALID_NAME.asGreetingException(); //TODO : 모든 exception에 에러코드 넣어야 함
		}
	}

	/**
	 * 중복된 name 검증 기능
	 *
	 * @param name
	 */
	public void verifyDuplicatedName(String name) {
		if (userRepository.existsByName(name)) {
			throw ExceptionStatus.DUPLICATED_NAME.asGreetingException();
		}
	}

	/**
	 * 로그인을 시도합니다
	 * <p>
	 * 진짜 있는 유저일까? 비밀번호는 맞게 입력했을까?, 성공하면 쿠키를 주자!
	 */
	public void login(String name, String password) {
		User user;

		Cookie cookie = new Cookie("쿠키는 어떻게, 왜 쓰는걸까요?", "파라미터는 뭘 줘야하지?");
	}

	/**
	 * 파라미터를 포함하고 있는 user정보들 중 name만을 List 형식으로 반환
	 *
	 * @param name
	 * @return
	 */
	public UserSearchDto searchUserByName(String name) {
		return new UserSearchDto(new ArrayList<>());
	}
}
