import React, { Component } from 'react';
import PokeItem from './PokeItem.js'

export default class PokeList extends Component {
    render() {
        const pokedeck = this.props.pokemons
            .map((pokecard, i) => <PokeItem key={i} pokemon={pokecard} />);
        console.log(pokedeck)
        return (
            <ul>{pokedeck}</ul>
        )
    }
}