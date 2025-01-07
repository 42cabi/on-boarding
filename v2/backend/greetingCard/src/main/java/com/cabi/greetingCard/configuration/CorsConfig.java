package com.cabi.greetingCard.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**") // 모든 경로에 대해 CORS 설정
						.allowedOrigins("http://localhost:3000") // 허용할 오리진
						.allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH") // 허용할 HTTP 메소드
						.allowedHeaders("*") // 허용할 헤더
						.allowCredentials(true); // 쿠키 허용 여부
			}
		};
	}
}