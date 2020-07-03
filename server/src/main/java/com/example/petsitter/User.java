package com.example.petsitter;

import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.GeneratedValue;

//the entity tag marks the class as data that can be persisted in a database.
@Entity
public class User {

    //table fields
	private @Id @GeneratedValue Long id;
	private String firstName;
	private String lastName;
    private String username;
    private String email;
    private String password;
    private String address;
    private String address2;
    private String country;
    private String city;
    private String zip;
    private String phone;

    private @Version @JsonIgnore Long version;


	private User() {}

    public User(String firstName, String lastName, String username, String email,
                    String password, String address, String address2, String country,
                    String city, String zip, String phone) {
		this.firstName = firstName;
		this.lastName = lastName;
        this.username = username;
        this.email = email;
        
        this.password = password;
        this.address = address;
        this.address2 = address2;
        this.country = country;
        this.city = city;
        this.zip = zip;
        this.phone = phone;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		User user = (User) o;
		return Objects.equals(id, user.id) &&
			Objects.equals(firstName, user.firstName) &&
			Objects.equals(lastName, user.lastName) &&
			Objects.equals(username, user.username) &&
			Objects.equals(password, user.password) &&
			Objects.equals(email, user.email) &&
			Objects.equals(address, user.address) &&
			Objects.equals(address2, user.address2) &&
			Objects.equals(country, user.country) &&
			Objects.equals(city, user.city) &&
			Objects.equals(zip, user.zip) &&
            Objects.equals(phone, user.phone) &&
            Objects.equals(version, user.version);
    }

	@Override
	public int hashCode() {

        return Objects.hash(id, firstName, lastName, username, password, email,
                            address, address2, country, city, zip, phone, version);
	}

    //#region getters/setters
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
    }
    
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getAddress2() {
        return address2;
    }

    public void setAddress2(String address2) {
        this.address2 = address2;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
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
			", firstName='" + firstName + '\'' +
			", lastName='" + lastName + '\'' +
			", username='" + username + '\'' +
			", password='" + password + '\'' +
			", email='" + email + '\'' +
			", address='" + address + '\'' +
			", address2='" + address2 + '\'' +
			", country='" + country + '\'' +
			", city='" + city + '\'' +
			", zip='" + zip + '\'' +
			", phone='" + phone + '\'' +
			", version=" + version +
			'}';
	}
}