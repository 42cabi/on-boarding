package com.example.dongglee.domain;

import com.example.dongglee.dto.MovieCreateRequestDto;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import java.time.LocalDateTime;
import lombok.Getter;

@Entity
@Getter
public class Movie {
    @Id
    @GeneratedValue
    @Column(name = "movie_id")
    private Long id;

    private String director;
    private String title;
    private LocalDateTime filmedAt;

    public static Movie from(MovieCreateRequestDto dto) {
        Movie movie = new Movie();

        movie.director = dto.getDirector();
        movie.title = dto.getTitle();
        movie.filmedAt = dto.getFilmedAt();
        return movie;
    }
}
