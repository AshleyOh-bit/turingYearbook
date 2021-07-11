import React, { Component } from 'react';
import Cohort from '../Cohort/Cohort';
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

  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1>Turing Yearbook</h1>
      </header>
      <section>
        <Cohort staff={this.state.staff} students={this.state.students}/>
      </section>
      {/* <section>
      <h2>Students</h2>
        <Cohort students={this.state.students}/>
      </section> */}
      </div>
    );
  }
}

export default App;
