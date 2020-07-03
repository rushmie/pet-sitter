package com.example.petsitter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

//TODO: need to add permanent database
//for now, we use an h2 in-memory database. it erases itself when the server is stopped,
//so is not good for production, but is useful for testing functionality.
//load the database on startup
@Component
public class DatabaseLoader implements CommandLineRunner {

	private final UserRepository repository;

	@Autowired
	public DatabaseLoader(UserRepository repository) {
		this.repository = repository;
	}

	@Override
	public void run(String... strings) throws Exception {
		//add a test user to the h2 database on startup
        this.repository.save(new User("Frodo", "Baggins", "ringbearer", "frodo@yahoo.com", "1234567",
                                          "11 old hollow st", "", "USA", "hobbitville", "43154", "1102214325"));
	}
}