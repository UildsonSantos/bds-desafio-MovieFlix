package com.bootcamp.devsuperior.movieflix.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bootcamp.devsuperior.movieflix.dtos.MovieDTO;
import com.bootcamp.devsuperior.movieflix.entities.Movie;
import com.bootcamp.devsuperior.movieflix.repositories.MovieRepository;
import com.bootcamp.devsuperior.movieflix.services.exceptions.ResourceNotFoundException;

@Service
public class MovieService {

	@Autowired
	private MovieRepository movieRepository;

	@Transactional(readOnly = true)
	public MovieDTO findById(Long id) {
		Optional<Movie> optMovie = movieRepository.findById(id);

		Movie movie = optMovie.orElseThrow(() -> new ResourceNotFoundException("Entity not found"));

		return new MovieDTO(movie);
	}
}
