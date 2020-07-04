import React from 'react';
import './Register.css';
import './Sitter.css';

export default class Register extends React.Component {

    //user fields
    state = {
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        confirmPass: "",
        address: "",
        address2: "",
        country: "",
        city: "",
        zip: "",
        phone: "",
        postId: 0
    }

    constructor(props){
        super(props);
        this.inputChanged = this.inputChanged.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    //update state when an input changes
    inputChanged(event) {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    onSubmit(event) {

        //post request to send user data to database
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                username: this.state.username,
                password: this.state.password,
                email: this.state.email,
                address: this.state.address,
                address2: this.state.address2,
                country: this.state.country,
                city: this.state.city,
                zip: this.state.zip,
                phone: this.state.phone
            })
        };
        fetch('http://localhost:8080/api/users', requestOptions)
            .then(response => response.json())
            .then(data => {
                //this.setState({ postId: data.id })
                console.log(data.id);
                console.log(data)
            });

            console.log(this.state.postId);
        // Simple POST request with a JSON body using fetch
        /*const requestOptions = {
            method: 'POST',
            headers: {
                    'Content-Type': 'application/json',
                    //'If-Match': employee.headers.Etag
            },
            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                username: this.state.username,
                password: this.state.password,
                email: this.state.email,
                address: this.state.address,
                address2: this.state.address2,
                country: this.state.country,
                city: this.state.city,
                zip: this.state.zip,
                phone: this.state.phone
            })
        };
        fetch('http://localhost:8080/api/employees', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))
            /*.then(response => {
                this.loadFromServer(this.state.pageSize);
            }, response => {
                if (response.status.code === 412) {
                    alert('DENIED: Unable to update ' +
                         '. Your copy is stale.');
                }
            })*/
            //.catch((error) => {console.log("Error of post request", error)});// this.setState({ postId: data.id }));

            /*client({method: 'GET', path: 'localhost:8080/api/employees'}).done(response => {
                console.log(response.entity._embedded.employees)});*/

            //navigate to add pets page
            this.props.history.push('/register-pets');
        }

    //contains inputs for name, username, password, email, phone, and address
    render() {
        return (
                    <div className="register-box">
                        <h1 className="text left">Register</h1>
                        <div className="register-grid">
                            <hr className="long-line"></hr>
                            <input className="input" type="text" name="firstName" value={this.state.firstName} onChange={this.inputChanged} placeholder="First Name" ></input>
                            <input className="input" type="text" name="lastName" value={this.state.lastName} onChange={this.inputChanged} placeholder="Last Name" ></input>
                            <input className="input" type="text" name="email" value={this.state.email} onChange={this.inputChanged} placeholder="Email" ></input>
                            <input className="input" type="text" name="username" value={this.state.username} onChange={this.inputChanged} placeholder="Username" ></input>
                            <input className="input" type="password" name="password" value={this.state.password} onChange={this.inputChanged} placeholder="Password" ></input>
                            <input className="input" type="password" name="confirmPass" value={this.state.confirmPass} onChange={this.inputChanged} placeholder="Confirm Password" ></input>
                            <input className="input long" type="text" name="address" value={this.state.address} onChange={this.inputChanged} placeholder="Address" ></input>
                            <input className="input long" type="text" name="address2" value={this.state.address2} onChange={this.inputChanged} placeholder="Address 2" ></input>
                            <input className="input" type="text" name="country" value={this.state.country} onChange={this.inputChanged} placeholder="Country" ></input>
                            <input className="input" type="text" name="city" value={this.state.city} onChange={this.inputChanged} placeholder="City" ></input>
                            <input className="input" type="text" name="zip" value={this.state.zip} onChange={this.inputChanged} placeholder="Zip Code" ></input>
                            <input className="input" type="text" name="phone" value={this.state.phone} onChange={this.inputChanged} placeholder="Phone Number" ></input>
                            <hr className="long-line"></hr>
                            <button className="button Cancel">Cancel</button>
                            <button className="button Next" onClick={ this.onSubmit}>Next</button>
                        </div>
                    </div>
        )
    }
}