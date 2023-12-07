package com.example.dongglee.domain;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
public class Director {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(name = "NAME", nullable = false)
	private String name;
	@Column(name = "COUNTRY", nullable = false)
	@Enumerated(EnumType.STRING)
	private Country country;
	@Column(name = "DEBUTED_AT", nullable = false)
	private LocalDateTime debutedAt;

	@OneToMany(targetEntity = Movie.class,
			fetch = FetchType.LAZY)
	private List<Movie> movies = new ArrayList<>();

	@Builder
	public Director(String name, Country country, LocalDateTime debutedAt) {
		if (name.length() > 20)
			throw new IllegalArgumentException("이름이 20자 이상입니다.");
		if (debutedAt.isBefore(LocalDateTime.of(1900, 1, 1, 0, 0)))
			throw new IllegalArgumentException("데뷔 시각은 1900년 전일 수 없습니다.");
		this.name = name;
		this.country = country;
		this.debutedAt = debutedAt;
	}
	@Override
	public boolean equals(Object other) {
		if (other == null)
			return false;
		if (!(other instanceof Director))
			return false;
		return ((Director) other).getId().equals(this.id);
	}
	public String hello() {
		return this.country.getHello();
	}

	public String explainMovie(Movie movie) {
		if (!movie.isFilmedBy(this))
			throw new IllegalArgumentException("제가 만든 영화가 아닙니다!");
		return "%s : 제가 만든 %s(은)는 %s 영화입니다."
			.formatted(this.name, movie.getTitle(), movie.getGenre());
	}
}
