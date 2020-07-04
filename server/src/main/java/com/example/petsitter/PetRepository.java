package com.example.petsitter;

import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

//repository to handle CRUD requests.
//CrudRepository defines all the functions we need to create, read, update, and delete users from our h2 database
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "api/pets", method = RequestMethod.POST, consumes = "application/json", produces = "application/json")
public interface PetRepository extends CrudRepository<Pet, Long>
{

}