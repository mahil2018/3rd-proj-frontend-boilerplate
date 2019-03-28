import React from 'react';
import MoviesList from './ListDemo'
const addList = (props) => {
    
    }
    return (
        <div  className="movies-list-item">
            <h2>{props.title}</h2>
            <p>Director: {props.director}</p>
            {awardText}
            <button onClick={props.clickToDelete}>Delete</button>
        </div>
    )
};

export default improvedCard;