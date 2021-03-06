import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

import background from './assets/background.jpg'

import data from './data/plans.js'

import Home from './Components/Home';
import About from './Components/About';
import Pricing from './Components/Pricing';
import Footer from './Components/Footer';
import BlogList from './Components/BlogList';
import Blog from './Components/Blog';
import Header from './Components/Header';
import Docs from './Components/Docs';
import Signup from './Components/Signup';
import ThankYou from './Components/ThankYou';
import NotFound from './Components/NotFound';




class App extends Component {
  render() {
    return (

        <BrowserRouter>
          <div className="App"  style={{backgroundImage: `url(${background})`, backgroundSize: `cover`}} >

            <div className="App-header">
              <Header />
            </div>
            <div className="App-Body">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/pricing" render = {() => <Pricing data={data} />} />
                  <Route path="/about" component={About} />
                  <Route exact path="/blog" component={BlogList} />
                  <Route path="/blog/:id" component={Blog} />
                  <Route path="/docs" component={Docs} />
                  <Route exact path="/signup" component={Signup} />
                  <Route path="/signup/thankyou/:email" component={ThankYou} />
                  <Route component={NotFound} />
                </Switch>
              <Footer />

            </div>
          </div>
        </BrowserRouter>

    );
  }
}

export default App;
