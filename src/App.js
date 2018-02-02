import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SpaRouter from './SpaRouter'

class App extends Component {
  render() {
    return (
      <div className="App">
          <SpaRouter/>
      </div>
    );
  }
}

export default App;
