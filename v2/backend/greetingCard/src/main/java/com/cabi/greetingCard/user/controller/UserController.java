package com.cabi.greetingCard.user.controller;

import com.cabi.greetingCard.dto.UserInfoDto;
import com.cabi.greetingCard.dto.UserSearchDto;
import com.cabi.greetingCard.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Q. RestController, Controller의 차이점은 뭘까요?
 * <p>
 * 해당 세 개의 어노테이션은 각각 무슨 의미일까요?
 * <p>
 * Rest API가 뭐고, 어떤 규칙을 갖고있지?
 */
@RestController
@RequiredArgsConstructor
@RequestMapping("/주체가누구지..")
public class UserController {

	private final UserService userService;

	/**
	 * PostMapping, GetMapping이 머지??
	 */
	@PostMapping("/test1")
	public void registerUser(@RequestBody UserInfoDto userInfoDto) {
		userService.registerUser(userInfoDto.getName(), userInfoDto.getPassword());
	}

	@GetMapping("/test2")
	public UserSearchDto searchUser(@RequestParam(name = "name") String name,
			@CookieValue(name = "userName") String userName) {
		return userService.searchUserByName(name);
	}

	/**
	 * 로그인 기능
	 * <p>
	 * 성공 시 유저의 id번호가 담긴 쿠키를 구워줍시다
	 * <p>
	 * 해당 프로젝트는 인가/인증이 중점이 아니므로, 보안은 신경쓰지 않고 쿠키로 로그인상태를 확인했습니다
	 * <p>
	 * 근데.. 쿠키 어떻게 주지?
	 *
	 * @param userInfoDto
	 * @return
	 */
	@PostMapping("/test3")
	public void login(@RequestBody UserInfoDto userInfoDto) {
		userService.login(userInfoDto.getName(), userInfoDto.getPassword());
	}
}
