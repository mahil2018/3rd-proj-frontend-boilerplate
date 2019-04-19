import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './components/user-pages/Signup';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>My Phone App</h1>
  
        </header>
        <Signup />
      </div>
    );
  }
}

export default App;
