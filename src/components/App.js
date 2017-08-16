import React, { Component } from 'react';
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        <p>{new Date().toLocaleTimeString()}wattup</p>
      </div>
    );
  }
}

export default App;
