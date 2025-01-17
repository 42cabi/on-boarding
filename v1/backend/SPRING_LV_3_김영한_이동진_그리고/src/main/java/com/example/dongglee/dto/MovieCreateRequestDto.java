package com.example.dongglee.dto;

import java.time.LocalDateTime;
import lombok.Getter;

@Getter
public class MovieCreateRequestDto {

	private String title;
	private String director;
	private LocalDateTime filmedAt;
}
