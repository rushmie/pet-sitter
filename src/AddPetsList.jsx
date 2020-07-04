import React from 'react';

//this component contains the list of pets
export default class AddPetsList extends React.Component {

    render() {
        //return a list of PetListItems
        return (
            <ul>{this.props.pets}</ul>
        );
    }
}