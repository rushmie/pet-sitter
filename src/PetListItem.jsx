//this component defines the list items for the register pets page.
//users can edit their pet's name, species, and age.


import React from 'react'
import './Register.css'



export default class PetListItem extends React.Component {

    state = {
        name: "",
        species: "",
        age: 0
    }

    constructor(props){
        super(props);
        this.inputChanged = this.inputChanged.bind(this);
    }

    //update the state every time the name is modified
    inputChanged(event) {
        //pull name of input from input field
        const name = event.target.name;
        //update state (will rerender)
        this.setState({
            [name] : event.target.value
        });
    }

    //render the pet list item with name input, drop down for species, and age number input
    render() {
        return (
            <div className="pet-list-item">
                <input className="left-text" name="name" type="text" value={this.state.name} onChange={this.inputChanged} placeholder="Name"></input>
                <select className="center-select" name="species" value={this.state.species} onChange={this.inputChanged} placeholder="Species">
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                    <option value="Mammal">Small Mammal</option>
                    <option value="Reptile">Reptile</option>
                    <option value="Other" inputMode="text">Other</option>
                </select>
                <label className="right-text">Age: <input className="number-text" name="age" type="number" value={this.state.age} onChange={this.inputChanged} placeholder="Age"></input>
                </label>
            </div>
        )
    }
}