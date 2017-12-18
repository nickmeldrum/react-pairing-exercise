import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form>
            <input type="text" />
            <button className="fa fa-search" />
          </form>
        </header>
      </div>
    );
  }
}

export default App;
