package com.example.dongglee;

import com.example.dongglee.domain.Movie;
import com.example.dongglee.dto.MovieCreateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movies")
@RequiredArgsConstructor
public class MovieController {

	private final MovieService movieService;

	@GetMapping
	public List<Movie> getMovie() {
		return movieService.getAllMovies();
	}

	@PostMapping
	public Movie createMovie(
			@RequestBody MovieCreateRequestDto dto) {
		return movieService.createMovie(dto);
	}
}
