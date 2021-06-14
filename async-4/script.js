const appendPokemon = (pokemon) => {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  const img = document.createElement('img');
  li.innerHTML = pokemon.name;
  img.src = pokemon.sprites.front_default;
  ul.appendChild(img);
  ul.appendChild(li);
};

const getPokemonPromise = (pokemonName) => {
  return new Promise((resolve, reject) => {
    if (pokemonName === 'rattataa') {
      reject('Esse pokemon é muito top para essa lista!');
    } else {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) => {
        response.json().then((pokemon) => {
          appendPokemon(pokemon);
          resolve();
        });
      });
    }
  });
};

const fetchPokemon = async () => {
  try {
    await getPokemonPromise('squirtle');
    await getPokemonPromise('pikachu');
    await getPokemonPromise('rattata');
    await getPokemonPromise('charizard');
  } catch(error) {
    console.log(error);
  }
};

window.onload = () => {
  fetchPokemon();
};
