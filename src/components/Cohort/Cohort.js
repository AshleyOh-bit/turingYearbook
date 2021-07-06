import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';
import App from './App/App';

// COHORT COMPONENT CODE GOES HERE

class Cohort extends App {
    constructor(staff) {
        super(staff)
        this.state = {
            cohort: staff
        }
    }

    render() {
        const personComponents = this.state.cohort.map(person => {
            return <Person key={person.id} name={person.name} quote={person.quote} superlative={person.superlative} photo={person.photo}/>
        })
        return (
            <div>
                {personComponents}
            </div>
        )
    }
     
}
//acts as a container for Person
//has state
//passes props to Person cards 
//creates and presents person cards 

//use .map to render the person cards 
//is a child of app?

export default Cohort;
