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
                <div>State: {this.props.usState}</div>
                <div>Location: {this.props.lat}, {this.props.lon}</div>
                <div>Population (estimated): {this.props.population}</div>
                <div>Total Wages: ${this.props.wages}</div>
            </div>
        )
    }
};

export default LocationCard;