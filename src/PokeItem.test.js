import React from 'react';
import renderer from 'react-test-renderer';
import PokeItem from './PokeItem.js';
import pokeData from './Data.js';

test('renders PokeItem.js correctly', () => {
    const tree = renderer
        .create(<PokeItem pokemon={pokeData} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});