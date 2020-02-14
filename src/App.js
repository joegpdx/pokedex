import React, { Component } from 'react';
// import request from 'superagent';
import Header from './Header.js';
import PokeList from './PokeList.js';
import Paging from './Paging.js';
import getPokemon from './PokemonApi.js'
import SearchOptions from "./SearchOptions.js";
import './App.css';


export default class App extends Component {
  state = {
    pokemon: []
  }
    
  async loadPokemon() {
    const response = await getPokemon();
    const pokemon = response.results;
    const totalResults = response.count;
    this.setState({
      pokemon: pokemon,
      totalResults: totalResults,
     });
  }
    async componentDidMount() {
      await this.loadPokemon();
      window.addEventListener('hashchange', async() => {
        await this.loadPokemon();
      })

    }

  render() {
    const { pokemon, totalResults } = this.state;
    return (
      <div>
        <Header />
        <SearchOptions />
        <PokeList pokemons={pokemon} />
        <Paging totalResults={totalResults}/>
      </div>
    );
  }
}