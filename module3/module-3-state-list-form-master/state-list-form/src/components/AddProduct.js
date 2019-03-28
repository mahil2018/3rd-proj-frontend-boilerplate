import React, { Component } from 'react';

class AddProduct extends Component {
    constructor(props){
        super(props);
        // the state the way as it is defined in the constructor is 
        // the initial state
        this.state = {
            _id: "",
            name: "",
            price: "",
            inStock: false
        };
        console.log(this.props);
    }

    // 🏆 this method is reusable for any form!!!
    onChangeHandler (event){
        // console.log("event is: ", event.target);
        let { name, value } = event.target;
        console.log(name, value);

        // CASE OF CHECKBOX:
        if(name === 'inStock' && value === 'on' ){
            value = true;
        }


        this.setState({ [name]:value });

        // IF WE DON'T HAVE THIS ONE GENERIC METHOD, WE WOULD HAVE OT HAVE 
        // ADDITIONAL METHODS TO HANDLE CHANGE IN EACH INPUT FIELD:
        // case of input with the name: _id
        // this.setState({
        //     _id: event.target.value
        // })

        // case of input with the name: name
        // this.setState({
        //     name: event.target.value
        // })

        // case of input with the name: price
        // this.setState({
        //     price: event.target.value
        // })

    }
    handleFormSubmit(event){
        event.preventDefault();
        this.props.productAddition(this.state);
        this.setState({
            _id: "",
            name: "",
            price: "",
            inStock: false
        });
    }
    render(){
        return(
            <div>
                <h2>Add a new product</h2>
                {/* handleFormSubmit => this is the way we called the method, can be any name */}
                <form onSubmit={ event => this.handleFormSubmit(event) }>
                    <label>ID: </label>
                    <input 
                        // onChangeHandler => this is the name we gave to the method, can be whichever
                        onChange={ event => this.onChangeHandler(event) }
                        name="_id"
                        type="text"
                        value = { this.state._id }
                    />
                    <br />
                    <label>NAME: </label>
                    <input 
                        onChange={ event => this.onChangeHandler(event) }
                        name="name"
                        type="text"
                        value = { this.state.name }
                    />
                    <br />
                    <label>PRICE: </label>
                    <input 
                        onChange={ event => this.onChangeHandler(event) }
                        name="price"
                        type="number"
                        value = { this.state.price }
                    />
                    <br />
                    <label>IN STOCK: </label>
                    <input 
                        onChange={ event => this.onChangeHandler(event) }
                        name="inStock"
                        type="checkbox"
                        checked = { this.state.inStock }
                    />
                    <br />
                    <button>Save new product</button>


                </form>
            </div>
        )
    }
}

export default AddProduct;