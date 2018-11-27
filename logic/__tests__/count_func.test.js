import { countInstances } from '../count_func';

// should add some null checks later
test.skip('works for null input', () => {
  const dictionary = null;
  const input = null;
  const occurrences = 0;
  expect(countInstances(dictionary, input)).toEqual(occurrences);
});

test('works for empty input', () => {
  const dictionary = [];
  const input = [];
  const occurrences = 0;
  expect(countInstances(dictionary, input)).toEqual(occurrences);
});

test('finds all instances', () => {
  const dictionary = ['she', 'her'];
  const input = ['she', 'her'];
  const occurrences = 2;
  expect(countInstances(dictionary, input)).toEqual(occurrences);
});

test('finds no instances', () => {
  const dictionary = ['she', 'her'];
  const input = ['I', 'don\'t', 'match'];
  const occurrences = 0;
  expect(countInstances(dictionary, input)).toEqual(occurrences);
});

test('works when input is capitalized', () => {
  const dictionary = ['she', 'her'];
  const input = ['She', 'Her'];
  const occurrences = 2;
  expect(countInstances(dictionary, input)).toEqual(occurrences);
});

test('works when input is uppercase', () => {
  const dictionary = ['she', 'her'];
  const input = ['SHE', 'HER'];
  const occurrences = 2;
  expect(countInstances(dictionary, input)).toEqual(occurrences);
});


