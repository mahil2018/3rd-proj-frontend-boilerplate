// // When the WALL-E button is clicked
// document.getElementById("post-wall-e").onclick = function() {
//     // Create an object with data to submit
//     const characterInfo = {
//        name:       'WALL-WOMANDAY',
//        occupation: 'Waste Allocation Robot',
//        weapon:     'Head laser'
//      };
//       // Make a POST request
//   axios.post('https://ih-crud-api.herokuapp.com/characters',characterInfo)
//   .then(response => {
//        const { name, id } = response.data;
//        const newCharacterHtml = 
//           `
//             <li>
//               <h3> ${name} </h3>
//               <p> Id: ${id} </p>
//             </li>
//           `;
//       document.getElementById("characters-list").innerHTML += newCharacterHtml;
//       console.log('post successfull and the response is: ',response );
//   })
//   .catch(error => {
//       console.log('Oh No! Error is: ', error);  
//   })
// }

// document.getElementById("character-form").onsubmit = function(event) {
//     console.log('form submit');
//   };
  // index.js

const theNames = document.getElementsByClassName("the-name");
const theOccupations = document.getElementsByClassName("the-occupation");
const theWeapons = document.getElementsByClassName("the-weapon");




document.getElementById("character-form").onsubmit = function(event) {
    event.preventDefault();
  
    const characterInfo = {
       name: theNames[0].value,
       occupation: theOccupations[0].value,
       weapon: theWeapons[0].value
    };
   
     axios.post('https://ih-crud-api.herokuapp.com/characters', characterInfo)
       .then(response => {
           const { name, id } = response.data;
           const newCharacterHtml = `
           <li>
             <h3> ${name} </h3>
             <p> Id: ${id} </p>
           </li>
           `;
           document.getElementById("characters-list").innerHTML += newCharacterHtml;
         // Clear the form after submitting:
           document.getElementById("character-form").reset();
 
       })
       .catch(error => {
           console.log("Error is: ", error);
       })
 }

 // Get character form

 