import React, { Component } from 'react';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      arr: ['milk', 'eggs', 'steak', 'broccoli', 'bread'],
      valueInput: ''
    }

  }
      handleChange(value) {
        this.setState({valueInput: value})
      };

    
    render() {
        let filteredArray = this.state.arr
        .filter((element, index) => {
          return element.includes(this.state.valueInput);
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>
      });

      return(
        <div className="App">
          <input onChange={e => this.handleChange(e.target.value)} type="text">
          </input>
          {filteredArray}
        </div>
      );
    }
  }


