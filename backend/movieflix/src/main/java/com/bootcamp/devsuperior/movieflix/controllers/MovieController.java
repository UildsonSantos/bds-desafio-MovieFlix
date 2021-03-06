package com.bootcamp.devsuperior.movieflix.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.devsuperior.movieflix.dtos.MovieCardDTO;
import com.bootcamp.devsuperior.movieflix.dtos.MovieDTO;
import com.bootcamp.devsuperior.movieflix.dtos.ReviewDTO;
import com.bootcamp.devsuperior.movieflix.services.MovieService;
import com.bootcamp.devsuperior.movieflix.services.ReviewService;

@RestController
@RequestMapping(value = "/movies")
public class MovieController {

	@Autowired
	private MovieService movieService;

	@Autowired
	private ReviewService reviewService;

	@GetMapping(value = "/{id}")
	public ResponseEntity<MovieDTO> findById(@PathVariable Long id) {
		MovieDTO movieDTO = movieService.findById(id);
		return ResponseEntity.ok().body(movieDTO);
	}

	@GetMapping(value = "/{movieId}/reviews")
	public ResponseEntity<List<ReviewDTO>> findMovieReviews(@PathVariable Long movieId) {
		List<ReviewDTO> reviews = reviewService.findByMovie(movieId);
		return ResponseEntity.ok().body(reviews);
	}
	
	@GetMapping
	public ResponseEntity<Page<MovieCardDTO>> findByGenre(
			@RequestParam(value = "genreId", defaultValue = "0") 
			Long genreId, 
			Pageable pageable) {
		Page<MovieCardDTO> pageMovieCard = movieService.findByGenre(genreId, pageable);		
		return ResponseEntity.ok().body(pageMovieCard);
	}
}