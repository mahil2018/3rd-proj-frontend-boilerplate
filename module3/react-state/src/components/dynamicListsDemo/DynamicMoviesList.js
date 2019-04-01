// components/dynamicListsDemo/DynamicMoviesList.js

import React, { Component } from 'react';
import ImprovedCard from './ImprovedCard'; // <== don't forget to import
import AddMovie from './AddMovie';

class DynamicMoviesList extends Component {
    constructor(){
        super();
        this.state = {
            movies: [
                { title: "The Godfather", director: "Francis Coppola", hasOscars: true, IMDbRating: 9.2 },
                { title: "Star Wars", director: "Rian Johnson" , hasOscars: true, IMDbRating: 8.7 },
                { title: "The Shawshank Redemption", director: "Frank Darabont", hasOscars: false, IMDbRating: 9.3 }
            ],
            showOscarAwarded: false // <== add
        }
    }
    
    toggleMovies = () => {
        this.setState({ showOscarAwarded: !this.state.showOscarAwarded });
    }
    
    deleteMovieHandler = (movieIndex) => {
        const moviesCopy = [...this.filteredMovies];
        moviesCopy.splice(movieIndex, 1);
        this.setState({
            movies: moviesCopy
        })
    }

    filteredMovies;

    render() {
        console.log(this.state.movies);

        const {showOscarAwarded} = this.state;

        this.filteredMovies = this.state.movies.filter(theMovie => theMovie.hasOscars === showOscarAwarded);

        return (
            <div>
                <AddMovie addTheMovie={this.addMovieHandler} />  
                {
                    this.filteredMovies.map((oneMovie, index) => {
                        // return <ImprovedCard key={index} {...oneMovie} clickToDelete={this.deleteMovieHandler.bind(this, index)} />
                        return <ImprovedCard key={index} {...oneMovie} clickToDelete={() => this.deleteMovieHandler(index)} />
                    })
                }            
                <button onClick={() => this.toggleMovies() }>
                    {showOscarAwarded ? 'Hide Oscar Awarded' : 'Show Oscar Awarded'}
                </button>
            </div>
        );
    }
}

export default DynamicMoviesList;