import React from 'react';

//this component handles the list of sitters returned by search
export default class SitterList extends React.Component {

    render() {
        return (
            <ul>{this.props.sitters}</ul>
        );
    }
}