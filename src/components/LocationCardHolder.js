import React, { Component } from 'react';
import LocationCard from './LocationCard';

class LocationCardHolder extends Component{
    constructor(props){
        super(props);
        this.locationArray = [];
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
                data.forEach((place) =>{
                    var locCard = new LocationCard();
                    locCard.setState({population: place.EstimatedPopulation})
                    locCard.setState({usState: place.State})
                    locCard.setState({lat: place.Lat})
                    locCard.setState({lon: place.Lon})
                    locCard.setState({wages: place.TotalWages})
                    this.locationArray.push(locCard);
                })
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    
    render(){
        return(
        <div>
            this.locationArray.forEach(place => {
            })
        </div>);
    }
}

export default LocationCardHolder;