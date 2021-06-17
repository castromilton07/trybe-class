const { getUserReposNames } = require('./github');
const { test, expect } = require('@jest/globals');
const fetch = require('node-fetch');

jest.mock('node-fetch');

const reposFake = [
  {
    name: 'Projeto Trybe',
  },
  {
    name: 'Projeto 2',
  },
];

test('Teste o getUserReposNames', async () => {
  expect.assertions(1);
  fetch.mockImplementation(async () => {
    return {
      json: async () => {
        return reposFake;
      },
    };
  });
  const repos = await getUserReposNames('isaacbatst');
  expect(repos).toEqual(['Projeto Trybe', 'Projeto 2']);
});
