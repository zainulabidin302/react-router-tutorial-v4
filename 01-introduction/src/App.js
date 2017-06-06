import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

import Home from './Components/Home';

import background from './assets/background.jpg'


class App extends Component {
  render() {
    return (
      <div className="App"  style={{backgroundImage: `url(${background})`, backgroundSize: `cover`}} >
        <div className="App-Body">
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
