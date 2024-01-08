package com.example.kong;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// 님이 있는 패키지 기준으로 컴포넌트 스캔을 시작합니다..
@SpringBootApplication
public class KongApplication {

	public static void main(String[] args) {
		SpringApplication.run(KongApplication.class, args);
	}
}
