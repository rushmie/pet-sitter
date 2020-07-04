import React from 'react';
import './Register.css';
import './Sitter.css';
import AddPetsList from './AddPetsList';
import PetListItem from './PetListItem';

//this components handles registering a user's pets.
export default class RegisterPets extends React.Component {

    state = {
        pets: [{}]
    }

    constructor(props){
        super(props);
        this.addPet = this.addPet.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
    }

    //add a PetListItem to the list of pets
    addPet(event) {
        
        var pets = this.state.pets;
        //add empty pet to list
        pets[pets.length] = {};

        console.log(pets);

        //update the state (will rerender)
        this.setState({
            pets: pets
        });
    }

    onUpdate(field, val, index) {
        var pets = this.state.pets;
        pets[index][field] = val;

        this.setState({
            pets: pets
        });
    }

    onSubmit(event) {
        //get username
        var user = "hmkiesel";

        var petsList = this.state.pets.forEach(pet => {
            console.log(pet);
        //post request to send user data to database
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: pet.name,
                species: pet.species,
                age: pet.age,
                username: user
            })
        };
        fetch('http://localhost:8080/api/pets', requestOptions)
            .then(response => response.json())
            .then(data => {
                //this.setState({ postId: data.id })
                console.log(data.id);
                console.log(data)
            });
        });

            //console.log(this.state.postId);
        

        //navigate to home page
        this.props.history.push('/');
    }

    render() {
        //var pets = this.state.pets;
        var pets = this.state.pets.map(pet => {
            return <li key={this.state.pets.indexOf(pet)}><PetListItem onUpdate={this.onUpdate} ListIndex={this.state.pets.indexOf(pet)}/></li>;
        });

        //contains AddPetsList component, which takes pets list as prop
        //add button to add a PetListItem to the list
        //cancel and next buttons
        return (
            <div className="register-pets-box">
                <h1 className="text left">Add Pets</h1>
                <button className="button right" onClick={this.addPet}>Add</button>
                <hr className="long-line"></hr>
                <AddPetsList pets={pets}/>
                <hr className="long-line"></hr>
                <button className="button Cancel">Cancel</button>
                <button className="button Next" onClick={this.onSubmit}>Next</button>
            </div>
        );
    }
}