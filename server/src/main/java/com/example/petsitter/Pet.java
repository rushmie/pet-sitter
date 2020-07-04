package com.example.petsitter;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.GeneratedValue;

//the entity tag marks the class as data that can be persisted in a database.
@Entity
public class Pet {

    //table fields
	private @Id @GeneratedValue Long id;
    private String username;
    private String name;
    private String species;
    private Integer age;


    private @Version @JsonIgnore Long version;


	private Pet() {}

    public Pet(String name, String species, Integer age, String username) {
		this.name = name;
        this.species = species;
        this.age = age;
        this.username = username;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Pet pet = (Pet) o;
		return Objects.equals(id, pet.id) &&
			Objects.equals(name, pet.name) &&
			Objects.equals(species, pet.species) &&
			Objects.equals(username, pet.username) &&
			Objects.equals(age, pet.age) &&
            Objects.equals(version, pet.version);
    }

	@Override
	public int hashCode() {

        return Objects.hash(id, name, species, age, username, version);
	}

    //#region getters/setters
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setname(String name) {
		this.name = name;
	}

	public String getSpecies() {
		return species;
	}

	public void setSpecies(String species) {
		this.species = species;
    }
    
    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
    }

    public Long getVersion() {
		return version;
	}

	public void setVersion(Long version) {
		this.version = version;
    }
    
    //#endregion

	@Override
	public String toString() {
		return "User{" +
			"id=" + id +
			", name='" + name + '\'' +
            ", species='" + species + '\'' +
            ", age='" + age + '\'' +
			", username='" + username + '\'' +
			", version=" + version +
			'}';
	}
}