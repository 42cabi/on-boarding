package com.example.dongglee.controller;

import com.example.dongglee.domain.Movie;
import com.example.dongglee.dto.MovieCreateRequestDto;
import com.example.dongglee.service.MovieService;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    public Movie createMovie(MovieCreateRequestDto dto) {
        return movieService.createMovie(dto);
    }
}
