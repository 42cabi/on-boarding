package com.example.dongglee.domain;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Builder
@Getter
public class Movie {
	private Long id;
	private String director;
	private String title;
	private LocalDateTime filmedAt;
}
