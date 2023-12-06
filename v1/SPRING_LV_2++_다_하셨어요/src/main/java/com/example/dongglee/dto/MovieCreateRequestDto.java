package com.example.dongglee.dto;

import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class MovieCreateRequestDto {
	private String title;
	private String director;
	private LocalDateTime filmedAt;
}
