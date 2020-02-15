import React from 'react';
import renderer from 'react-test-renderer';
import Paging from './Paging.js';

test('renders PokeItem.js correctly', () => {
    const tree = renderer
        .create(<Paging />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});