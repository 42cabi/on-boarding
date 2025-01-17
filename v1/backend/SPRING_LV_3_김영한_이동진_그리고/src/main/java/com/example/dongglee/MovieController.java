package com.example.dongglee;

import com.example.dongglee.domain.Movie;
import com.example.dongglee.dto.MovieCreateRequestDto;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class MovieController {

	private final MovieService movieService;

	@GetMapping("/movies")
	public List<Movie> getMovie() {
		return movieService.getAllMovies();
	}

	@PostMapping("/movies")
	public Movie createMovie(@RequestBody MovieCreateRequestDto dto) {
		return movieService.createMovie(dto);
	}
}
