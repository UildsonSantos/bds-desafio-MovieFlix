package com.bootcamp.devsuperior.movieflix.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.devsuperior.movieflix.dtos.GenreDTO;
import com.bootcamp.devsuperior.movieflix.services.GenreService;

@RestController
@RequestMapping(value = "/genres")
public class GenreController {

	@Autowired
	private GenreService genreService;

	@GetMapping
	public ResponseEntity<List<GenreDTO>> findAll() {
		List<GenreDTO> genreDTOs = genreService.findAll();
		return ResponseEntity.ok().body(genreDTOs);
	}
}
