import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Gifs from './Gifs';

class App extends Component {
  constructor() {
    super()
    const lastSearchReturn = JSON.parse(window.localStorage.getItem('lastSearchReturn')) || {};
    const lastSearchTerm = window.localStorage.getItem('lastSearchTerm') || '';
    this.state = {
      searchQuery: lastSearchTerm,
      gifList: lastSearchReturn.data ? lastSearchReturn.data.data : []
    }
  }

  handleChange = (e) => (
    this.setState({
      searchQuery: e.target.value
    })
  );

  giphy = (e) => {
    e.preventDefault();

    const { searchQuery } = this.state;
    const apiKey = process.env.REACT_APP_GIPHY_API_KEY;
    const url = 'https://api.giphy.com/v1/gifs/search?';
    axios.get(url, {
      params: {
        q: searchQuery,
        limit: 10,
        api_key: apiKey
      }
    }).then((res) => {
      localStorage.setItem('lastSearchReturn', JSON.stringify(res))
      localStorage.setItem('lastSearchTerm', searchQuery)
      this.setState({ gifList: res.data.data })
    }).catch((err) => console.error(err))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <form onSubmit={this.giphy}>
          <input value={this.state.searchQuery} onChange={this.handleChange} />
        </form>
        <Gifs gifList={this.state.gifList} />
      </div>
    );
  }
}

export default App;
