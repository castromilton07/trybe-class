const fetch = require('node-fetch');

const USERS_ENDPOINT = 'https://api.github.com/users/';

const getUserReposUrl = (username) => `${USERS_ENDPOINT}${username}/repos`;

const getUserReposNames = (username) => fetch(getUserReposUrl(username))
  .then(response => response.json())
  .then(repos => repos.map(repo => repo.name));

/* const getUserReposNamesAsync = async () => {
  const resṕonse = await fetch(getUserReposUrl(username));
  const repos = await resṕonse.json();
  return repos.map(repo => repo.name);
}

getUserReposNames('isaacbatst')
  .then(reposNames => console.log(reposNames)); */

module.exports = {
  getUserReposNames,
  getUserReposUrl,
};
