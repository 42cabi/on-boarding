package com.example.dongglee.service;

import com.example.dongglee.domain.Movie;
import com.example.dongglee.dto.MovieCreateRequestDto;
import com.example.dongglee.repository.MovieRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MovieService {

    private final MovieRepository movieRepository;

    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    public Movie createMovie(MovieCreateRequestDto dto) {
        Movie movie = Movie.builder()
                .director(dto.getDirector())
                .title(dto.getTitle())
                .filmedAt(dto.getFilmedAt())
                .build();

        return movieRepository.save(movie);
    }
}
