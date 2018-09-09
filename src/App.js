import React, { Component } from 'react';
import GiphyApp from './projects/gifhub/App';
import TriviaApp from './projects/triviagame/App';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TriviaApp />
      </div>
    );
  }
}

export default App;
