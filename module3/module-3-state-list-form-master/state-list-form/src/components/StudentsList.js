import React, { Component } from 'react';


// "extends" => we use it to make the instance of the Component class
class StudentsList extends Component {

    // "constructor" => method represents the class itself, the object thats' created as an instance
    constructor(){
        // using "super" we have access to all the parent's (Component's) properties
        super();

        // ✅ state is always object
        this.state = {
            students: ["Camilo", "Chris", "Will", "Miller"]
        }
    }

    addStudent(){
        const newStudent = prompt("What's student name?");
        // 🚨🚨🚨🚨 big no no 🚨🚨🚨🚨🚨 => don't mutate the state 
        // this.state.students.unshift(newStudent);

        const { students } = this.state;

        // 1st step: make a copy of the array
        const studentsCopy = [...students]; 

        // 2nd: modify the copy of the array
        studentsCopy.unshift(newStudent);

        // 3rd step: set the state of the original array to the new array
        this.setState({
            students: studentsCopy
        })

    }
    

    deleteStudent(whichOne) {
        console.log('which: ', whichOne);
        const { students } = this.state;

        // 1st step: make a copy of the array
        const studentsCopy = [...students]; 

        // 2nd step: remove element from the array

        // whichOne is the index and "1" stands for number of elements to be removed
        studentsCopy.splice(whichOne, 1); 


        // 3rd step: update the state with the new array
        this.setState({
            students: studentsCopy
        })
    }



    render(){
        const { students } = this.state; // destructuring, it's the same as:
        // const students = this.state.students;

        return (
            <div>
                <button onClick={ () => this.addStudent() }>Add new student</button>
                <ul>
                    { students.map((oneStudent, index) => {
                        return(
                        // key prop needs to be unique:
                            // in this case we use "index",
                            // in some other that's going to be _id from the DB, or something similar
                            <li key={ index }> 
                                { oneStudent } 
                                <button onClick={ () => this.deleteStudent(index) } >Delete</button>
                            </li>
                        )
                    }) }
                </ul>
            </div>
        )
    }
}

export default StudentsList;