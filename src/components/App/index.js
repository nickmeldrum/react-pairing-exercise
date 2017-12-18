import React, { Component } from 'react';
import './App.css';
import ProductSearch from '../ProductSearch';
import SearchResults from '../SearchResults';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ProductSearch />
        </header>
        <SearchResults />
      </div>
    );
  }
}

export default App;
