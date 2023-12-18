package com.example.dongglee;

import com.example.dongglee.domain.Movie;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieRepository {
	List<Movie> findAll();

	Movie save(Movie movie);
}
