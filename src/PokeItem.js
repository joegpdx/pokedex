import React, { Component } from 'react';

export default class PokeItem extends Component {
    render() {

        return (
            <li>
                <div>
                    <p>Pokemon: {this.props.pokemon.pokemon}</p>
                    <img alt="" src={this.props.pokemon.url_image} />
                    <p>Attack: {this.props.pokemon.attack}</p>
                    <p>defense: {this.props.pokemon.defense}</p>
                    <p>HP: {this.props.pokemon.hp}</p>
                </div>
            </li>
        )
    }
}