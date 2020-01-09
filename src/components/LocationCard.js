import React, { Component } from 'react';

class LocationCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            usState: props.usState,
            lat: props.lat,
            lon: props.lon, 
            population: props.population,
            wages: props.wages
        }
    }

    render() {
        return (
            <div className = "LocationCard">
                <div>State: {this.state.usState}</div>
                <div>Location: {this.state.lat}, {this.state.lon}</div>
                <div>Population (estimated): {this.state.population}</div>
                <div>Total Wages: {this.state.wages}</div>
            </div>
        )
    }
}

export default LocationCard;