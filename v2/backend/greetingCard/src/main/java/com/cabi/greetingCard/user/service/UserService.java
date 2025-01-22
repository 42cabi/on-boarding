package com.cabi.greetingCard.user.service;

import com.cabi.greetingCard.dto.UserSearchDto;
import com.cabi.greetingCard.exception.ExceptionStatus;
import com.cabi.greetingCard.user.domain.User;
import com.cabi.greetingCard.user.repository.UserRepository;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseCookie;
import org.springframework.stereotype.Service;

/**
 * 이 어노테이션은 또 멀까? 컴포넌트 서치가 머더라? Autowired는 또 머지..
 */
@Slf4j
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
	public ResponseCookie login(String name, String password) {
		// 진짜 있는 유저일까?
		User loginUser = userRepository.findByName(name)
				.orElseThrow(ExceptionStatus.NOT_FOUND_USER::asGreetingException);

		// 비밀번호는 맞게 입력했을까?
		if (!loginUser.getPassword().equals(password)) {
			throw ExceptionStatus.UNAUTHORIZED_PASSWORD.asGreetingException();
		}

		// 성공하면 쿠키를 주자!
		return ResponseCookie.from("name", name)
				.maxAge(24 * 60 * 60) // 유효 기간 1일
				.path("/") // 경로 설정
				.build();
	}

	/**
	 * 파라미터를 포함하고 있는 user정보들 중 name만을 List 형식으로 반환
	 *
	 * @param input
	 * @param userName
	 * @return
	 */
	public UserSearchDto searchUserByName(String input, String userName) {
		List<User> userList = userRepository.findAllByNameStartingWithOrderByName(input);

		// 현재 로그인한 userName과 일치한다면 삭제
		userList.removeIf(user -> user.getName().equals(userName));

		List<String> nameList = userList.stream().map(User::getName).collect(Collectors.toList());

		return new UserSearchDto(nameList);
	}

	/**
	 * 로그인 권한이 필요한 페이지마다 현재 로그인한 유저가 유효한지 확인합니다.
	 *
	 * @param name
	 */
	public void checkAuth(String name) {
		// 잘못된 쿠키인 경우
		if (name.equals("none")) {
			throw ExceptionStatus.INVALID_COOKIE.asGreetingException();
		}

		// 쿠키에 유저이름이 있지만 데이터베이스와 일치하지 않는 경우
		if (!userRepository.existsByName(name)) {
			throw ExceptionStatus.NOT_FOUND_USER.asGreetingException();
		}
	}
}
