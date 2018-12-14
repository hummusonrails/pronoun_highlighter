import React from 'react';
import Counter from '../counters';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Counter femaleNum={1} maleNum={2} neutralNum={3} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});