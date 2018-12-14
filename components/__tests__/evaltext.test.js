import React from 'react';
import Evaltext from '../evaltext';
import renderer from 'react-test-renderer';

it('renders gender female', () => {
  const tree = renderer
    .create(<Evaltext word="her" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders gender male', () => {
  const tree = renderer
    .create(<Evaltext word="him" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('render gender neutral', () => {
  const tree = renderer
    .create(<Evaltext word="them" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('does not match any list words', () => {
  const tree = renderer
    .create(<Evaltext word="sunset" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});