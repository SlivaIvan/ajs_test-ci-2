import sortHeroes, { heroes } from '../index';

test('checking units health 100', () => {
  expect(sortHeroes(heroes)[0]).toEqual({ name: 'маг', health: 100 });
});

test('checking units health 80', () => {
  expect(sortHeroes(heroes)[1]).toEqual({ name: 'лучник', health: 80 });
});

test('checking units health 10', () => {
  expect(sortHeroes(heroes)[2]).toEqual({ name: 'мечник', health: 10 });
});
