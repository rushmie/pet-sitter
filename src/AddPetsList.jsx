import React from 'react';

//this component contains the list of pets
export default class AddPetsList extends React.Component {

    render() {
        //pull pets list from props (passed from RegisterPets component)
        var pets = this.props;
        //return a list of PetListItems
        return (
            <ul>{this.props.pets}</ul>
        );
    }
}