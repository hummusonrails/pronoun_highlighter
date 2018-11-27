import { countInstances } from '../count_func';

// should add some null checks later
test.skip('works for null input', () => {
  const dictionary = null;
  const input = null;
  const occurences = 0;
  expect(countInstances(dictionary, input)).toEqual(occurences);
});

test('works for empty input', () => {
  const dictionary = [];
  const input = [];
  const occurences = 0;
  expect(countInstances(dictionary, input)).toEqual(occurences);
});

test('finds all instances', () => {
  const dictionary = ['she', 'her'];
  const input = ['she', 'her'];
  const occurences = 2;
  expect(countInstances(dictionary, input)).toEqual(occurences);
});

test('finds no instances', () => {
  const dictionary = ['she', 'her'];
  const input = ['I', 'don\'t', 'match'];
  const occurences = 0;
  expect(countInstances(dictionary, input)).toEqual(occurences);
});

test('works when input is capitalized', () => {
  const dictionary = ['she', 'her'];
  const input = ['She', 'Her'];
  const occurences = 2;
  expect(countInstances(dictionary, input)).toEqual(occurences);
});

test('works when input is uppercase', () => {
  const dictionary = ['she', 'her'];
  const input = ['SHE', 'HER'];
  const occurences = 2;
  expect(countInstances(dictionary, input)).toEqual(occurences);
});


