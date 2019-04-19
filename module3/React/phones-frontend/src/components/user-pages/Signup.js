import React, { Component } from 'react';
import axios from 'axios'
class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            // these are req.body.name of each input field in the form
            fullName: "",
            email:"",
            originalPassword:""
        }
    }
    //this function is used in all events that has name and value
    genericSync(event) {
        const {name, value} = event.target;  //encapsula en el target
        this.setState({[name]: value})
    }
    // handle the key and values in the form
    handleSubmit(event){
        event.preventDefault();
        axios.post(
            'http://localhost:3001/api/signup', //1st which route I am hitting in the backend
            this.state, // 2nd , since this is a post riytem U gave ti sebd sinetgubg
            {withCredentials:true} //3rd and optional ===. credentials: true ???
        )
        .then(responseFromServer =>{
            console.log('response is: ', responseFromServer.data)
            // const {userDoc} = responseFromServer.data
            // this.props.onUserChange(userDoc) // ask question
        })
        .catch(err =>{
            console.log('error while signup: ', err)
            if(err.response && err.response.data){
                return this.setState({message: err.response.data.message})
            }
        })
    }

    render(){
        return(
            <section>
                <h2>SignUp</h2>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <label> Full Name </label>
                    <input
                        value = {this.state.fullName}
                        onChange = {event => this.genericSync(event)}  //event listener porque react detecta cambios, entonces solo renderiza al enviar la inf completa
                        type= "text"
                        name= "fullName"
                        placeholder= "maria"
                    />
                    <label> E-mail </label>
                    <input
                        value = {this.state.email}
                        onChange = {event => this.genericSync(event)}  //event listener porque react detecta cambios, entonces solo renderiza al enviar la inf completa
                        type= "text"
                        name= "email"
                        placeholder= "e-mail"
                    />
                    <label> Password </label>
                    <input
                        value = {this.state.originalPassword}
                        onChange = {event => this.genericSync(event)}  //event listener porque react detecta cambios, entonces solo renderiza al enviar la inf completa
                        type= "password"
                        name= "originalPassword"
                        placeholder= "mypassword"
                    />
                    <button> Sign Up</button>
                </form> 
                    {this.state.message && <div>{this.state.message}</div>}
            </section>
        )
    }
}

export default Signup;