// Dialog.js
import React from "react";
import FancyBorder from "./component/FancyBorder"

function Dialog(props) { // !!!
    return (
      <FancyBorder>
        <h1>               
          {props.title}   
        </h1>                 
        <p>                   
          {props.message} 
        </p>                  
      </FancyBorder>          
    );                        //        |                         |
  }                           //        |                         |
                              //        |                         |
  function WelcomeDialog() {  //        |                         |
    return (                  //        |                         |
      <Dialog                 //        |                         |
        title="Welcome"   // <===========                         |    
        message="Thank you for visiting our spacecraft!" /> // <===
    );
}

export default WelcomeDialog;