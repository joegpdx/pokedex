import React from 'react';
import renderer from 'react-test-renderer';
import PokeList from './PokeList.js';
import pokeData from './Data.js';

test('renders PokeItem.js correctly', () => {
  const tree = renderer
    .create(<PokeList pokemons={pokeData} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});