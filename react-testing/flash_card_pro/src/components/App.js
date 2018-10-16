import React, { Component } from 'react';
import '../App.css';
import Stacklist from './Stacklist';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h2>Flash Card Pro</h2>
        <hr />
        <Link to='stack_form'><h4>Create a new Stack</h4></Link>
        <hr />
        <Stacklist />
      </div>
    );
  }
}

export default App;
