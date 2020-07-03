package com.example.petsitter;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class PetSitterController {

	@CrossOrigin(origins = "http://localhost:3000") //allow requests from front end
	@RequestMapping("/")
	public String index() {
		return "Greetings from Spring Boot!";
	}

}