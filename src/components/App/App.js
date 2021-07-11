import React, { Component } from 'react';
import Cohort from '../Cohort/Cohort';
import Form from '../Form/Form';
import people from '../../data/yearbook-data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students
    }
  }

  handleClick = newStudent => {
    this.setState({students: [...this.state.students, newStudent]})
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1>Turing Yearbook</h1>
      </header>
      <section>
        <Cohort staff={this.state.staff} students={this.state.students}/>
      </section>
      <section>
      <h2>Enroll a Student</h2>
        <Form students={this.state.students} handleClick={this.handleClick}/>
      </section>
      </div>
    );
  }
}

export default App;
