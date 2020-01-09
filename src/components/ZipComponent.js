import React, { Component } from 'react';

class ZipCode extends Component {
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

    handleSearchClick = () => {
        let linkToAPI = 'http://ctp-zip-api.herokuapp.com/zip/'+document.getElementById("search-text").value;
        fetch(linkToAPI)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                let data = myJson;
                console.log(data[0])
                    this.setState({population: data[0].EstimatedPopulation})
                    this.setState({usState: data[0].State})
                    this.setState({lat: data[0].Lat})
                    this.setState({lon: data[0].Lon})
                    this.setState({wages: data[0].TotalWages})
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }   

    render() {
        return (
            <div className="container">
            <div className = "Search">
                <h3>Zip Code:</h3>
                <input id="search-text" type="text" placeholder="Try 10016"/>
                <button className="search-button" onClick={this.handleSearchClick}>Search</button>
            </div>
            <div className = "LocationCard">
                <div>State: {this.state.usState}</div>
                <div>Location: {this.state.lat}, {this.state.lon}</div>
                <div>Population (estimated): {this.state.population}</div>
                <div>Total Wages: {this.state.wages}</div>
            </div>
            </div>
        )
    }
}

export default ZipCode;



