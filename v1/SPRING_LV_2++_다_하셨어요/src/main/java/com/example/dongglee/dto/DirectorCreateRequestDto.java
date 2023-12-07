package com.example.dongglee.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@NoArgsConstructor
@Getter
public class DirectorCreateRequestDto {
	private String name;
	private LocalDateTime debutedAt;
}
