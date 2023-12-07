package com.example.dongglee;

import com.example.dongglee.domain.Country;
import com.example.dongglee.domain.Director;
import com.example.dongglee.domain.Genre;
import com.example.dongglee.domain.Movie;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

import java.time.LocalDateTime;

import static org.assertj.core.api.Assertions.*;

public class MovieTest {

	@Nested
	@DisplayName("Movie를 생성할 때,")
	class MovieConstruction {
		private final String normalTitle = "title";
		private final String normalName = "name";
		private final LocalDateTime now = LocalDateTime.now();
		@Test
		@DisplayName("영속화되지 않은 감독인 경우에 생성할 수 없다.")
		void fail1() {
			Director notPersistedDirector = Director.builder()
					.name(normalName)
					.country(Country.KOREAN)
					.debutedAt(now)
					.build();
			assertThatThrownBy(() -> new Movie(notPersistedDirector, normalTitle, Genre.DRAMA, now))
					.isInstanceOf(IllegalStateException.class);
		}

		@DisplayName("영화가 제작된 시각이 감독의 데뷔 이전이면 생성할 수 없다.")
		@Test
		void fail2() {
			LocalDateTime debutedAt = now.minusDays(100);
			Director persistedDirector = Director.builder()
					.name(normalName)
					.country(Country.KOREAN)
					.debutedAt(debutedAt)
					.build();
			TestUtil.setEntityId(persistedDirector, 1L);

			assertThatThrownBy(() -> new Movie(persistedDirector, normalTitle, Genre.DRAMA, debutedAt.minusDays(1)))
					.isInstanceOf(IllegalArgumentException.class);
		}

		@DisplayName("생성에 성공한다.")
		@Test
		void success() {
			LocalDateTime debutedAt = now.minusDays(100);
			Director persistedDirector = Director.builder()
					.name(normalName)
					.country(Country.KOREAN)
					.debutedAt(debutedAt)
					.build();
			TestUtil.setEntityId(persistedDirector, 1L);

			Movie movie = Movie.builder()
					.director(persistedDirector)
					.title("헤어질 결심")
					.filmedAt(debutedAt.plusDays(100))
					.build();

			assertThat(movie).isNotNull();
		}
	}

	@Nested
	@DisplayName("영화가 언제 만들어졌는지 구분할 때")
	class MovieFilmed {
		@Test
		@DisplayName("뭐 잘 되겠죠?")
		void test() {
			LocalDateTime debutedAt = LocalDateTime.now();
			Director persistedDirector = Director.builder()
					.name("sanan")
					.country(Country.KOREAN)
					.debutedAt(debutedAt)
					.build();
			TestUtil.setEntityId(persistedDirector, 1L);
			Movie movie = Movie.builder()
					.director(persistedDirector)
					.title("헤어질 결심")
					.filmedAt(debutedAt.plusDays(100))
					.build();
			assertThat(movie.isFilmedAfter(LocalDateTime.now().minusDays(1))).isTrue();
		}

	}
}
