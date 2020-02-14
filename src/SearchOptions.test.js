import React from 'react';
import renderer from 'react-test-renderer';
import SearchOption from './SearchOptions.js';

test('renders PokeItem.js correctly', () => {
  const tree = renderer
    .create(<SearchOption />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});