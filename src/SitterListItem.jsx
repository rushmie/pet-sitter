import React from 'react'
import './Sitter.css'


//this component defines the list item for sitters, and is used in the search results
export default class SitterListItem extends React.Component {
    //contains a profile pic, name, $$ for service, star rating, and distance.
    render() {
        return (
            <div className="sitter-list-item">
                <div className="profile-pic" ></div>
                <label className="left-text">{this.props.name}</label>
                <label className="right-text">${this.props.rate}</label>
                <label className="left-text">{this.props.stars}/5 stars</label>
                <label className="right-text">{this.props.distance} miles</label>
            </div>
        )
    }
}