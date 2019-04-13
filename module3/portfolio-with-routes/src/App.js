import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
        <Route exact path='/' component={Header}/>
        <Route exact path='/' component={Home}/>
        <Route path='/About' component={About}/>
        </Switch>
      </div>
    );
  }
}

export default App;
