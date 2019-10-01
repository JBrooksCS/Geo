import React from 'react';
import logo from './logo.svg';
import './App.css';
import Geosuggest from 'react-geosuggest';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Geosuggest />
      </header>
    </div>
  );
}

export default App;
