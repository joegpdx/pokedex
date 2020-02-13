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
    const query = this.state.query;
    const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex`)

    console.log(data.body);

    this.setState({ pokemon: data.body.results })
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