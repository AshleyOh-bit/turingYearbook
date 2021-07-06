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

     
}
//acts as a container for Person
//has state
//passes props to Person cards 
//creates and presents person cards 

//use .map to render the person cards 
//is a child of app?

export default Cohort;
