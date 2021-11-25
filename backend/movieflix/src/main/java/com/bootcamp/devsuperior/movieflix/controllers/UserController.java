package com.bootcamp.devsuperior.movieflix.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.devsuperior.movieflix.dtos.UserDTO;
import com.bootcamp.devsuperior.movieflix.entities.User;
import com.bootcamp.devsuperior.movieflix.services.AuthService;

@RestController
@RequestMapping(value = "/users")
public class UserController {
	
	@Autowired
	private AuthService authService;
	
	@RequestMapping(value = "/profile")
	@GetMapping
	public ResponseEntity<UserDTO> getProfile(){
		User user = authService.authenticated();
		return ResponseEntity.ok().body(new UserDTO(user));
	}
}
