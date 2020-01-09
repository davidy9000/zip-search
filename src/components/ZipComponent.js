import React, { Component } from 'react';

class ZipCode extends Component {
    constructor(props){
        super(props);
        this.state = {
            usState: props.usState,
            lat: props.lat,
            lon: props.lon, 
            population: props.population,
            wages: props.wages,
            apiData: []
        }
        //this.apiData = [];
    }

    handleSearchClick = () => {
        let linkToAPI = 'http://ctp-zip-api.herokuapp.com/zip/'+document.getElementById("search-text").value;
        fetch(linkToAPI)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                this.setState({apiData: myJson});/*
                let data = myJson;
                console.log(data[0])
                    this.setState({population: data[0].EstimatedPopulation,
                        usState: data[0].State, lat: data[0].Lat, 
                        lon: data[0].Long,wages: data[0].TotalWages});*/
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    makeTable = () =>{
        //console.log(this.state.apiData);
        let currData = this.state.apiData;
        let table = [];
        let row = [];
        for(let i = 0; i < currData.length; i++){
            row.push(<td>
                <div className = "LocationCard">
                <div>State: {currData[i].State}</div>
                <div>Location: {currData[i].Lat}, {currData[i].Long}</div>
                </div></td>)
        }
        table.push(<tr>{row}</tr>);
        return table;

    }   

    render() {
        return (
            <div className="container">
            <div className = "Search">
                <h3>Zip Code:</h3>
                <input id="search-text" type="text" placeholder="Try 10016"/>
                <button className="search-button" onClick={this.handleSearchClick}>Search</button>
            </div>
            <table className="data">
                {this.makeTable()}
            </table>
            </div>
        )
    }
}

export default ZipCode;



