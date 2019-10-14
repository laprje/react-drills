import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from './Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url = 'https://www.topgear.com/sites/default/files/styles/16x9_1280w/public/images/news-article/2019/05/9a5164f92224af3873d6615efd91cf1f/288gto-3.jpg?itok=2UVcsF_u' />
      </div>
    );
  }
}

export default App;
