package com.example.dongglee.domain;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.boot.autoconfigure.domain.EntityScan;

import java.time.LocalDateTime;

@Getter
@Entity
@NoArgsConstructor
public class Movie {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(nullable = false)
	private String director;
	@Column(nullable = false)
	private String title;
	@Column(nullable = false)
	private LocalDateTime filmedAt;

	@Builder
	public Movie(String director, String title, LocalDateTime filmedAt) {
		this.director = director;
		this.title = title;
		this.filmedAt = filmedAt;
	}
}
