package com.example.dongglee.repository;

import com.example.dongglee.domain.Movie;
import java.util.List;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieRepository {
    List<Movie> findAll();

    Movie save(Movie movie);
}
