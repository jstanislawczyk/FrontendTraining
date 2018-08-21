import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.name = this.getText();

  }
  
  getText() {
    return 'Kuba';
  }
  
  render() {
    return (
      <div className="App">
        <h1>First React App</h1>
        <h2>{this.getText()}</h2>
      </div>
    );
  }
}

export default App;
