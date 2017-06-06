import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

import background from './assets/background.jpg'


import Home from './Components/Home';
import About from './Components/About';
import Pricing from './Components/Pricing';
import Footer from './Components/Footer';




class App extends Component {
  render() {
    return (
      <div className="App"  style={{backgroundImage: `url(${background})`, backgroundSize: `cover`}} >

        <BrowserRouter>
            <div className="App-Body">
                <Route exact path="/" component={Home} />
                <Route path="/pricing" component={Pricing} />
                <Route path="/about" component={About} />
                <Route component={Footer} />
            </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
