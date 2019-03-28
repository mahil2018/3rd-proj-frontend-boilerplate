import React, { Component } from 'react';
import AddProduct from './AddProduct';

class ProductsList extends Component {

    constructor(){
        super();
        this.state = {
            showInStock: false,
            products: [
                {
                    _id: "34rg",
                    name: "iPhone X",
                    price: 799.99,
                    inStock: true
                },
                {
                    _id: "36gu",
                    name: "iron",
                    price: 29.99,
                    inStock: false
                },
                {
                    _id: "97ux",
                    name: "coffee mug",
                    price: 9.00,
                    inStock: true
                }
            ]
        }
    }

    checkIfInStock(){
        // check the state of "showInStock" and on each click on the button change it to the opposite of what it was        this.setState({
            // showInStock: !this.state.showInStock
        }


    deleteProduct(theIndex){
        const { products } = this.state;
        const prodCopy = [...products];

        prodCopy.splice(theIndex, 1);
        this.setState({
            products: prodCopy
        });
    }

    addNewProduct(newProduct){
        // console.log('adding!', newProduct);

        // we get "newProduct" from the child component (<AddProduct />)

        const prodCopy = [...this.state.products];
        prodCopy.push(newProduct);

        this.setState({ products:prodCopy })
    }

    render(){
        const { products, showInStock } = this.state;
        return(
            <div>
                {/* add AddProduct component here:  */}
                <AddProduct productAddition={ productToBeSaved => this.addNewProduct(productToBeSaved) }    />
                <button onClick={ () => this.checkIfInStock() } > { showInStock ? "All products" : "In Stock" } </button>
                <ul>
                    { products.map((oneProd, index) => {
                        return(
                            (!showInStock || oneProd.inStock) && (
                                // _id is always unique so we don't have to use index if we don't want to
                                <li key={ oneProd._id }>
                                    <h3> { oneProd.name } </h3>
                                    <p> { oneProd.price } </p>
                                {/* "? "==> if true do this, " : " else do do something else */}
                                    { oneProd.inStock ? <p> In stock </p> : <p> Out of stock </p> }
                                    <button onClick={ () => this.deleteProduct(index) }>Delete</button>
                                </li>
                            )
                        )
                    }) }
                </ul>
            </div>
        )
    }
}

export default ProductsList;