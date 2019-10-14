import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: ['milk', 'eggs', 'steak', 'broccoli', 'bread']
    }
  }
  render() {
    let display = this.state.data.map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })
    
    return (
      <div className="App">
        {display}
      </div>
    );
  }
}


export default App;
