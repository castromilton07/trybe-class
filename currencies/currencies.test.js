// const { test, expect } = require('@jest/globals');
const { expect } = require('@jest/globals');
const filterByValue = require('./currencies');

test('Moedas acima de 50', () => {
  expect.assertions(1);
  return filterByValue(50)
    .then((data) => {
      expect(data).toEqual(['Dram armênio']);
  });
});

test('Moedas acima de 1000', () => {
  expect.assertions(1);
  return filterByValue(1000)
    .catch((data) => {
      expect(data).toBe('Nenhuma moeda encontrada.');
  });
});