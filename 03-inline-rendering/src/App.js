import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

import background from './assets/background.jpg'


import Home from './Components/Home';
import About from './Components/About';
import Pricing from './Components/Pricing';
import Footer from './Components/Footer';
import Blog from './Components/Blog';
import Header from './Components/Header';




class App extends Component {
  render() {
    return (

        <BrowserRouter>
          <div className="App"  style={{backgroundImage: `url(${background})`, backgroundSize: `cover`}} >

            <div className="App-header">
              <Header />
            </div>

            <div className="App-Body">
                <Route exact path="/" component={Home} />
                <Route path="/pricing" component={Pricing} />
                <Route path="/about" component={About} />
                <Route path="/blog" render ={() =>  <Blog />} />
                <Route component={Footer} />
            </div>
          </div>
        </BrowserRouter>

    );
  }
}

export default App;
