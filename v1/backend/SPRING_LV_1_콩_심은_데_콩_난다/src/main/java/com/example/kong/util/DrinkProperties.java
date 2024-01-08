package com.example.kong.util;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

/*
* 1. 클래스가 Spring Container에 의해 인스턴스화
* 2. Spring Bean으로 관리되어야한다 명시화
*
* -> 컴포넌트 스캔, Spring Context에 bean으로 등록 및 생명주기 관리
* @Autowired 같은 어노테이션을 통해 의존성 주입 가능
* */
@Component // 가 뭘까요?
@Getter // Lombok -> Getter 선언. 외부에서도 값을 읽을 수 있다
public class DrinkProperties {

	/*
	* 프로퍼티 파일, 환경 변수, 커맨드 라인 인자 등에서 값을 주입
	* application.properties 또는 application.yml 파일에 정의된 프로퍼티 값을 클래스의 필드에 바인딩
	*
	* Spring이 관리하는 빈의 초기화 시점에서 applicaiont~ 에서 해당 값을 서치, 계층별로 나타내고 있다.
	* 	-> 클래스 내부 필드에 바인딩(drink에 주입)
	*
	* BeanCreationException(생성할랬더니 그런거 없는디요?에러)를 방지하기 위해
	* @Value("${spring.kong.what-kind-of-drink:coke}")
	* 이런 식으로 default 값을 정해줄 수도 있다네용
	* */
	@Value("${spring.kong.what-kind-of-drink}") // 는 어떻게 값을 가져오는 걸까요?
	private String drink;
}
