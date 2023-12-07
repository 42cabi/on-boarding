package com.example.dongglee.domain;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
public class Movie {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(name = "TITLE", nullable = false)
	private String title;
	@Column(name = "GENRE", nullable = false)
	private Genre genre;
	@Column(name = "FILEMED_AT", nullable = false)
	private LocalDateTime filmedAt;

	@ManyToOne(targetEntity = Director.class,
			fetch = FetchType.LAZY)
	private Director director;

	@Override
	public boolean equals(Object other) {
		if (other == null)
			return false;
		if (!(other instanceof Movie))
			return false;
		return ((Movie) other).getId().equals(this.id);
	}
	@Builder
	public Movie(Director director, String title, Genre genre, LocalDateTime filmedAt) {
		if (director.getId() == null)
			throw new IllegalStateException("없는 감독입니다!");
		if (filmedAt.isBefore(director.getDebutedAt()))
			throw new IllegalArgumentException("감독의 데뷔 이전에 영화가 제작될 수 없습니다!");
		this.director = director;
		this.title = title;
		this.genre = genre;
		this.filmedAt = filmedAt;
	}

	// 별도의 query가 해당 엔티티의 행위 자체에서 실행될 수 있다는 점에서 안 좋을 수 있음
	// select는 entity의 책임이 아니기 때문 && 추적이 어려움
	public boolean isFilmedBy(Director director) {
		return this.director.equals(director);
	}

	public boolean isFilmedAfter(LocalDateTime at) {
		return this.filmedAt.isAfter(at);
	}
}
