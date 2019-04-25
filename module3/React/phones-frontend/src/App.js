import React, { Component } from 'react';
// import logo from './logo.svg';
import axios from 'axios';
import { Switch, NavLink, Route } from "react-router-dom";
import './App.css';

import Signup from './components/user-pages/Signup';
import Login from './components/user-pages/Login';
import Home from './components/Home';
import AddPhone from './components/phone-pages/AddPhone';
import PhoneList from './components/phone-pages/PhoneList';



class App extends Component {
  //maintain the user in the section
  constructor(){
    super();
    this.state = {
      currentUser: null,
    }
  }

  //Virtual representation on functions, parents, childs, body, in react virtual dom.. delete ..creat..react doesn't refresh
  //componentdidmount
  componenetDidMount(){
    axios.get(this.newMethod(), {withCredentials:true})
      .then(responseFromBackend => {
        console.log('Response from Backend is :', responseFromBackend.data)
        const {userDoc} = responseFromBackend.data
        this.syncCurrentUser(userDoc);
      })
  }
  syncCurrentUser(user){
    this.setState({ currentUser: user })
  }
 
  logout(){
    axios.delete(
      "http://localhost:3001/api/logout", 
        { withCredentials:true }
    )
    .then( () => this.syncCurrentUser(null))
    .catch( err => console.log(err));
  }

  render() {
    return (
      <div className="App">
     
        <header className="App-header">
        {/* //this is exam how to normally do the Route */}
        {/* <img src="laHonda.jpg" className="App-logo" alt="pic"/> */}
          <h1>My Phone App</h1>
          <nav>
            {/* Home will be always visible to everyone */}
            <NavLink to="/">Home</NavLink><br />
            <NavLink to="/phone-list">Phones </NavLink><br />
            {this.state.currentUser ? (
              // these pages will be visible only if the user exists
              <span>
                <NavLink to="/add-phone"> Add a Phone </NavLink>
                <br />
                <b> {this.state.currentUser.fullName}</b>
                <button onClick={() => this.logout()}>Log Out</button>
              </span>
              
            ) : (
              //these pages will be visible only if there is no user in the session
            <span>
            < NavLink to="/signup-page">Signup</NavLink>
            < NavLink to="login-page">Login</NavLink>
            </span>
            )}
          </nav>
         
        </header>
        <Switch>
           <Route exact path="/" component={Home} />
                {/* <Route path="/somePage component= (someComponentthatWillRenderWhenUserClickThisLind) />" */}
                {/* this way we use when we are passing params down to componenDidMout(){
                  so we can not use component ={} , but instead we have to use render ={} =><somoComponent />
                } */}
            <Route path="/signup-page" render={ () => 
              <Signup currentUser={this.state.currentUser}
                    onUserChange= { userDoc => this.syncCurrentUser(userDoc)} />
              } />

            <Route path="/login-page" render= { () =>
              <Login currentUser={this.state.currentUser} 
                    onUserChange= { userDoc => this.syncCurrentUser(userDoc)} />
            } />
            {/* to prevent users to access the routes  when they are not logged in,
            we are passing currentUser into the componeent so we can check ther whether it's available there */}
            <Route path="/add-phone" render= { () => <AddPhone currentUser={this.state.currentUser } /> }/>
            <Route path="/phone-list" component={ PhoneList }/>
        </Switch>
            
        <footer>Made with Love by Mahil</footer>
      </div>
    );
  }
}

export default App;
