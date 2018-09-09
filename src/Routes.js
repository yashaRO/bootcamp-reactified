import React, { Component } from 'react';
import { BrowserRouter as Router, Route }  from 'react-router-dom';
import GiphyApp from './projects/gifhub/App';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Route to="/test" component={GiphyApp} />
      </Router>
    )
  }
}

export default Routes;
