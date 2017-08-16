import React, { Component } from 'react';
import Header from "./Header";
import Photos from "./Photos";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Photos />
        <p>{new Date().toLocaleTimeString()}wattup</p>
      </div>
    );
  }
}

export default App;
