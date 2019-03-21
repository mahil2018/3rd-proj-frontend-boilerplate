import React, { Component } from "react";
import ReactPlayer from 'react-player'
import "./App.css";
import "./component/User.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <User firstName="Harper" />
        <User firstName="Ana" />
        
      </div>
    );
  
    const user = {
      firstName: 'Harper',
      lastName: 'Perez',
      avatarUrl:'ru'
    };
    const displayAvartar = (user) => {
      if(user.avatarUrl){
        return <img src={user.avatarUrl} />
      } else {
        return <img src='https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png' width='300' height='300'/>
      }
    }

    const element = (
      <h2>
        Hello, {formatName(user)}!
      </h2>
    );
    return (
      <div className="App">
        <h1> Hello Ironhackers! </h1>
        {element}
      </div>
    );
  }
}

export default App;