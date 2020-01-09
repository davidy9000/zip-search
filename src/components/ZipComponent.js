import React, { Component } from 'react';

class ZipCode extends Component {
    constructor(props){
        super(props);
        this.state = {
            apiData: []
        }
    }

    handleSearchClick = () => {
        let linkToAPI= 'http://ctp-zip-api.herokuapp.com/zip/'+document.getElementById("search-text").value;
        fetch(linkToAPI)
            .then((response) => {
                if(response.status === 404){
                    return;
                }
                return response.json();
            })
            .then((data) => {
                this.setState({apiData: data});
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    makeTable = () => {
        let currData = this.state.apiData;
        let table = [];
        //currData is undefined when we get 404 error
        if(currData===undefined){
            table.push(<tr>No Results</tr>);
            return table;
        } else {
            let rowHead = [];
            let rowData = [];
            for(let i = 0; i < currData.length; i++){
                rowHead.push(<th>{currData[i].City},{currData[i].State}</th>)
                rowData.push(<td>
                    <p>State: {currData[i].State}</p>
                    <p>Location: {currData[i].Lat}, {currData[i].Long}</p>
                    <p>Population: {currData[i].EstimatedPopulation}</p>
                    <p>Wages: {currData[i].TotalWages}</p>
                    </td>);
            }
            table.push(<tr>{rowHead}</tr>);
            table.push(<tr>{rowData}</tr>);
            return table;
        }
    }   

    render() {
        return (
            <div className="container">
                <div className = "Search">
                    <h3>Zip Code:</h3>
                    <input id="search-text" type="text" placeholder="Try 10016"/>
                    <button className="search-button" onClick={this.handleSearchClick}>Search</button>
                </div>
                <table id="data">
                    {this.makeTable()}
                </table>
            </div>
        )
    }
}

export default ZipCode;



