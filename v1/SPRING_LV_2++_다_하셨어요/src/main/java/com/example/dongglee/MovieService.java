package com.example.dongglee;

import com.example.dongglee.domain.Director;
import com.example.dongglee.domain.Movie;
import com.example.dongglee.dto.MovieCreateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MovieService {

	private final MovieRepository movieRepository;
	private final DirectorRepository directorRepository;

	public List<Movie> getAllMovies() {
		return movieRepository.findAll();
	}

	public Movie createMovie(MovieCreateRequestDto dto) {
		Director director = directorRepository.findById(dto.getDirectorId())
				.orElseThrow(() -> new RuntimeException("Failed to find director!"));
		Movie movie = Movie.builder()
				.director(director)
				.title(dto.getTitle())
				.filmedAt(dto.getFilmedAt())
				.build();

		return movieRepository.save(movie);
	}
}
