import React, { Component } from 'react';
import Header from "./Header";
import Feed from "./Feed";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Feed />
        <p>{new Date().toLocaleTimeString()}wattup</p>
      </div>
    );
  }
}

export default App;
