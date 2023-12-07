package com.example.dongglee;

import com.example.dongglee.domain.Country;
import com.example.dongglee.domain.Director;
import com.example.dongglee.domain.Genre;
import com.example.dongglee.domain.Movie;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

import java.time.LocalDateTime;

import static org.assertj.core.api.Assertions.*;

public class DirectorTest {
	private static final int MAX_NAME_LEN = 20;
	private static final int MIN_DEBUT_YEAR = 1900;
	private static final LocalDateTime MIN_DEBUTED_AT = LocalDateTime.of(MIN_DEBUT_YEAR, 1, 1, 0, 0);
	private static final LocalDateTime NOW = LocalDateTime.now();
	@Nested
	@DisplayName("감독을 생성할 때,")
	class DirectorConstruction {
		@Test
		@DisplayName("이름이 "+ MAX_NAME_LEN + "자가 넘으면 생성할 수 없다.")
		void fail1() {
			assertThatThrownBy(() ->
					new Director("123456789012345678901", Country.KOREAN, NOW)
					).isInstanceOf(IllegalArgumentException.class);
		}

		@DisplayName("데뷔 시각이 " + MIN_DEBUT_YEAR + "년 전인 경우는 생성할 수 없다.")
		@Test
		void fail2() {
			assertThatThrownBy(() ->
					new Director("sanan", Country.KOREAN, MIN_DEBUTED_AT.minusDays(1))
			).isInstanceOf(IllegalArgumentException.class);
		}

		@DisplayName("생성에 성공한다.")
		@Test
		void test() {
		    Director director = Director.builder()
				    .name("sanan")
				    .country(Country.KOREAN)
				    .debutedAt(NOW)
				    .build();

			assertThat(director).isNotNull();
		}
	}

	@Nested
	@DisplayName("감독이 설명할 때,")
	class DirectorExplain {
		LocalDateTime debutedAt = NOW.minusDays(100);
		Director sanan = Director.builder()
				.name("sanan")
				.country(Country.KOREAN)
				.debutedAt(debutedAt)
				.build();
		Director jpark2 = Director.builder()
				.name("jpark2")
				.country(Country.KOREAN)
				.debutedAt(debutedAt)
				.build();
		@Test
		@DisplayName("본인의 영화가 아니면 설명하지 않는다.")
		void fail1()  {
			TestUtil.setEntityId(sanan, 1L);
			TestUtil.setEntityId(jpark2, 2L);

			Movie sanansMovie = Movie.builder()
					.director(sanan)
					.title("헤어질 결심")
					.filmedAt(debutedAt.plusDays(100))
					.build();

			assertThatThrownBy(() -> jpark2.explainMovie(sanansMovie))
					.isInstanceOf(IllegalArgumentException.class);
		}

		@DisplayName("본인의 영화면 설명할 수 있다.")
		@Test
		void success() {
			TestUtil.setEntityId(sanan, 1L);

			Movie sanansMovie = Movie.builder()
					.director(sanan)
					.title("헤어질 결심")
					.genre(Genre.DRAMA)
					.filmedAt(debutedAt.plusDays(100))
					.build();

			String result = sanan.explainMovie(sanansMovie);

			assertThat(result).isNotNull();
			System.out.println(result);
		}

	}
}
