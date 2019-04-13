import React, { Component } from 'react';
import Header from './Header';
import Counter from './'
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = { isRunning: true};
    console.log('I am in the Constructor of the App.js');
  }
  stopCounter = () => {
    this.setState({...this.state, isRunning: false })
  }
  render() {
    console.log('I am in Render of the App.js.');
   
    return this.state.isRunning ? (
      
      <div className="App">
         <Header  />
        <h2> Clicking this button will destroy the Counter Component and clear the state.</h2>
        <button onClick={this.stopCounter}>Stop the Counter</button>
        <Counter />
      </div>
    ) : null
   
  }
  
}

export default App;
