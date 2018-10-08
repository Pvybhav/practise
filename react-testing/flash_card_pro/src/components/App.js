import React, { Component } from 'react';
import '../App.css';
import Stacklist from './Stacklist';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Flash Card Pro</h2>
        <hr />
        <Stacklist />
      </div>
    );
  }
}

export default App;
