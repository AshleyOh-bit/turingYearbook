import React from 'react';
import './Person.css';

// PERSON COMPONENT CODE GOES HERE

const Person = (props) => {
    return (
        <div>
            <img src={props.photo}/>
            <h2>{props.name}</h2>
            <p>{props.quote}</p>
            <h3>{props.superlative}</h3>
        </div>
    )
}

//is a functional component
//accepts props 
//renders a card with props
//will render: image, name, quote, superlative

export default Person;
