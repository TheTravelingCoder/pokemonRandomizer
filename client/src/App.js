import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pokemon from './components/pokemon';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pokemon Randomizer</h1>
        </header>
        <Pokemon />
      </div>
    );
  }
}

export default App;
