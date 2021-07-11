import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';
import App from '../App/App';

// COHORT COMPONENT CODE GOES HERE

class Cohort extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            staff: props.staff,
            students: props.students
        }
    }

    render() {
        console.log(this.state.staff)
        const staffComponents = this.state.staff.map(person => {
            return <Person key={person.id} name={person.name} quote={person.quote} superlative={person.superlative} photo={person.photo}/>
        })
        const studentComponents = this.state.students.map(person => {
            return <Person key={person.id} name={person.name} quote={person.quote} superlative={person.superlative} photo={person.photo}/>
        })
        return (
            <div className="staff-container">
                <h2>Staff</h2>
                {staffComponents}
                <h2>Students</h2>
                {studentComponents}
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
