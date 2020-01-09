import React, {Component} from 'react';
import './App.css';
import LocationCards from './components/LocationCard.js'

// zipChangeHandler = () =>{
//   fetch('http://ctp-zip-api.herokuapp.com/zip/10016')
// }

class ZipCode extends Component{
  constructor(props){
    super(props);
    this.state = {
      usState: props.usState,
      lat: props.lat,
      lon: props.lon, 
      population: props.population,
      wages: props.wages,
      showForm: true
    }
  }

    zipChangeHandler = () =>{
      fetch('http://ctp-zip-api.herokuapp.com/zip/10016')
      .then((response) => {
        return(response.json());
      })
      .then((myJson) => {
        this.showForm = true;
        this.setState({usState:  myJson[0].State});
        this.setState({lat: myJson[0].Lat});
        this.setState({lon: myJson[0].Lon});  
        this.setState({population: myJson[0].EstimatedPopulation});
        this.setState({wages: myJson[0].TotalWages});
      });
    }



    render(){
      if(this.showForm){
        console.log(this.state);
        console.log(this.lat);  
        return  <div>
          <h1>Zip Code Search</h1>
          <h3>Zip Code:</h3>
          <input type="text" placeholder="Try 10016" onChange={this.zipChangeHandler} />
          <h3>{this.state.usState}</h3>
          <ul>
            <li>State:{this.state.usState}</li>
            <li>location:{this.state.lat} , {this.state.lon}</li>
            <li>population:{this.state.population}</li>
            <li>total wage:{this.state.wages}</li>
          </ul>
        </div>
      }
      else{
        return  <div>
          <h1>Zip Code Search</h1>
          <h3>Zip Code:</h3>  
          <input type="text" placeholder="Try 10016" onChange={this.zipChangeHandler} />
          <p>No results
          </p>
        </div>
      }
  }
};

function App() {
  return (
    <div className="App">
      <ZipCode/>
    </div>
  );
}

export default App;
