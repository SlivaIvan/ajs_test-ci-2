import sortHeroes, { heroes } from '../index';

test('checking units health 100', () => {
  expect(sortHeroes(heroes)).toEqual({ name: 'маг', health: 100 });
});

test('checking units health 80', () => {
  expect(sortHeroes(heroes)).toEqual({ name: 'маг', health: 80 });
});

test('checking units health 10', () => {
  expect(sortHeroes(heroes)).toEqual({ name: 'маг', health: 10 });
});
