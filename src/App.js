import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import About from './Components/About';
import Header from './Components/Header';
import Home from './Components/Home';

const ROUTES = [
  {to: '/about', title: 'About'},
  {to: '/', title: 'Home' },
]

class App extends Component {
  render() {
    return (

          <BrowserRouter>
            <div className="App" >
              <Header routes={ROUTES} />
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </div>

          </BrowserRouter>

    );
  }
}

export default App;
