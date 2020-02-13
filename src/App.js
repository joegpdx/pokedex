import React, { Component } from 'react';
import request from 'superagent';
import Header from './Header.js';
import PokeList from './PokeList.js';
import './App.css';


export default class App extends Component {
  state = {
    pokemon: [],
    query: ''
  }
  async componentDidMount() {
    const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex`)

    console.log(data.body);

    this.setState({ pokemon: data.body.results })
  }
  handleChange = (e) => {
    this.setState({ query: e.target.value });
  }

  handleClick = async () => {
    // getting the state
    const query = this.state.query;

    this.setState({ loading: true });
    // wait for the request to finish
    const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?search=${query}`)

    this.setState({ loading: false });
    // log out the data
    console.log(data.body);

    // set state with that data
    this.setState({ quotes: data.body })
  }
  render() {
    return (
      <div>
        <Header />
        <PokeList pokemons={this.state.pokemon} />
      </div>
    );
  }
}