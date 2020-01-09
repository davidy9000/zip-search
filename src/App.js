import React from 'react';
import './App.css';
import LocationCards from './components/LocationCard.js'

function App() {
  return (
    <div className="App">
      <h1>Zip Code Search</h1>
      <h3>Zip Code:</h3>
      <input type="text" placeholder="Try 10016"/>
      <p>No results</p>
    </div>
  );
}

export default App;
