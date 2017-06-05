import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

import About from './Components/About';
import Header from './Components/Header';
import Home from './Components/Home';
import Pricing from './Components/Pricing';
import background from './assets/background.jpg'




class App extends Component {
  render() {
    return (

          <BrowserRouter>
            <div className="App"  style={{backgroundImage: `url(${background})`, backgroundSize: `cover`}} >
              <div className="App-header">
                <Header  />
              </div>
              <div className="App-Body">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/pricing" component={Pricing} />
                </Switch>
              </div>
            </div>

          </BrowserRouter>

    );
  }
}

export default App;
