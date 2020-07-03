import React from 'react';
import SitterList from './SitterList';
import SitterListItem from './SitterListItem';
import './Sitter.css';

//order types
const Order = {
    CLOSEST: 'closest',
    CHEAPEST: 'cheapest',
    HIGHEST_RATED: 'highest_rated'
}

//this component handles the sitter search page
export default class SitterSearchPage extends React.Component {
    state = {
        sitters: [],
        searchInput: "",
        sortCompareFunc: this.distanceCompare,
        maxDistance: 10 //miles
    }

    constructor(props){
        super(props);

        //add some test sitters
        var sitters = [];
        sitters[0] = {name:"Shawn Kiesel", distance:1.2, stars:3, rate:25};
        sitters[1] = {name:"Mr. Bean", distance:0.4, stars:4, rate:40};
        sitters[2] = {name:"Emma", distance:3.4, stars:5, rate:28};
        sitters[3] = {name:"Frank", distance:0.9, stars:2, rate:23};

        this.state.sitters = sitters;
        console.log(this.state.sitters);

        //bind functions to "this" to prevent "this" from being undefined within the function
        this.onSearchInputChange = this.onSearchInputChange.bind(this);
        this.distanceCompare = this.distanceCompare.bind(this);
        this.priceCompare = this.priceCompare.bind(this);
        this.ratingCompare = this.ratingCompare.bind(this);
        this.onOrderChange = this.onOrderChange.bind(this);
    }

    //update state when search input changes (will rerender)
    onSearchInputChange(event){
        this.setState({
            searchInput: event.target.value
        })
    }

    //change comparison function when the user selects a new "Order By"
    onOrderChange(event){
        var compareFunction = this.distanceCompare;

        switch(event.target.value){
            case Order.CHEAPEST:
                compareFunction = this.priceCompare;
                break;
            case Order.HIGHEST_RATED:
                compareFunction = this.ratingCompare;
                break;
            default:
                break;
        }

        //update state (will rerender)
        this.setState({
            sortCompareFunc: compareFunction
        })
    }

    //put shortest distance first
    distanceCompare(a, b){
        return a.distance - b.distance;
    }

    //put lowest rate first
    priceCompare(sitter1, sitter2){
        return sitter1.rate - sitter2.rate;
    }

    //put highest rating first
    ratingCompare(sitter1, sitter2){
        return sitter2.stars - sitter1.stars;
    }

    render() {
        //pull compare function from state
        const sortCompareFunc = this.state.sortCompareFunc;

        //filter results (will add filter options later)
        var searchResults = this.state.sitters.filter(sitter => {
            return sitter.distance < 100;// this.state.maxDistance; // this.getDistance(sitter.location, this.props.user.location) < this.state.maxDistance;
        })

        //sort using chosen compare function
        searchResults = searchResults.sort((a,b) => { return sortCompareFunc(a,b); });

        //convert results to a list of SitterListItem components contained within <li> tags
        searchResults = searchResults.map(sitter => {
            return <li key={searchResults.indexOf(sitter)}><SitterListItem name={sitter.name} rate={sitter.rate} stars={sitter.stars} distance={sitter.distance}/></li>
        })

        //contains search bar, Order By drop down, Filter button (no pop-up component yet),
        //and SitterList component which takes our list of SitterListItems as a prop
        return (
            <div className="search-page">
                <h2 className="title three-col">Pet Sitting Made Easy</h2>
                <input className="search-bar" type="text" placeholder="Search (enter city or zip code)" onChange={this.onSearchInputChange}></input>
                <div className="right-col">
                    <select className="order-by" defaultValue="closest" onChange={this.onOrderChange}>
                        <option value={Order.CLOSEST}>Closest</option>
                        <option value={Order.CHEAPEST}>Cheapest</option>
                        <option value={Order.HIGHEST_RATED}>Highest Rating</option>
                    </select>
                    <button className="filter-button">Filter</button>
                </div>
                <div className="sitter-list">
                    <SitterList sitters={searchResults}/>
                </div>
            </div>
        );
    }
}