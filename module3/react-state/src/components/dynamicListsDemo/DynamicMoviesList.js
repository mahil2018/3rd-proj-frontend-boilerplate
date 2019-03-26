// components/dynamicListsDemo/DynamicMoviesList.js

import React, { Component } from 'react';
import ImprovedCard from './ImprovedCard'; // <== don't forget to import

class DynamicMoviesList extends Component {
    constructor(){
        super();
        this.state = {
          movies: [
            { title: "The Godfather", director: "Francis Coppola", hasOscars: true, IMDbRating: 9.2 },
            { title: "Star Wars", director: "Rian Johnson" , hasOscars: true, IMDbRating: 8.7 },
            { title: "The Shawshank Redemption", director: "Frank Darabont", hasOscars: false, IMDbRating: 9.3 }
        ]
        }
    }

    deleteMovieHandler = (movieIndex) =>{
        const moviesCopy = [...this.state.movies];  //notice the spread operator here
        moviesCopy.splice(movieIndex, 1);
        this.setState({
            movies: moviesCopy
        })
    }

    render() {
        console.log(this.state.movies);
        return (
        <div>
            {
                this.state.movies.map((oneMovie, index) => {
                // return <ImprovedCard key={index} {...oneMovie} clickToDelete={this.deleteMovieHandler.bind(this, index)} />
                return <ImprovedCard key={index} {...oneMovie} clickToDelete={() => this.deleteMovieHandler(index)} /> 
            })
            }
        </div>
        )
    }
};

export default DynamicMoviesList;