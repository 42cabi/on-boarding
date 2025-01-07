package com.cabi.greetingCard.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * 일단 로그인을 하려면, id(name), password가 필요합니다. Dto를 통해 FE로부터 입력받은 값들을 받아오도록 합시다!
 * <p>
 * 근데 이 어노테이션은 왜필요한거지?!
 */
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class UserInfoDto {

	private String name;
	private String password;
}
