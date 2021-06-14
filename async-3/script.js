const appendPokemon = (pokemon) => {
  // console.log(pokemon.name);
  // console.log(pokemon.sprites.front_default);
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  const img = document.createElement('img');
  li.innerHTML = pokemon.name;
  img.src = pokemon.sprites.front_default;
  ul.appendChild(img);
  ul.appendChild(li);
};

/* const requestPokemon = (callback) => {
  setTimeout(() => {
    callback('squirtle');
  }, 3000);
}; */

/* const getPokemon = (pokemonName ,callback) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) => {
    // console.log(response.json().then());
    response.json().then((pokemon) => {
      appendPokemon(pokemon);
      callback ? callback() : undefined;
    });
  });
} */

/* const fetchPokemon = () => {
  getPokemon('squirtle',
    getPokemon('pikachu',
      getPokemon('charizard',
        getPokemon('bulbasaur',
          getPokemon('charmander',
            getPokemon('pidgey',
              getPokemon('jigglypuff',
                getPokemon('alakazam',
                  getPokemon('dragonite'))
              )
            )
          )
        )
      )
    )
  );
}; */

/* const fetchPokemon = () => {
  // requestPokemon((pokemon) => {
    // console.log(pokemon);
    appendPokemon(pokemon);
  // });

  fetch('https://pokeapi.co/api/v2/pokemon/squirtle').then((response) => {
    // console.log(response.json().then());
    response.json().then((pokemon) => {
      appendPokemon(pokemon);
      fetch('https://pokeapi.co/api/v2/pokemon/pikachu').then((response) => {
        // console.log(response.json().then());
        response.json().then((pokemon) => {  
          appendPokemon(pokemon);
          fetch('https://pokeapi.co/api/v2/pokemon/rattata').then((response) => {
            // console.log(response.json().then());
            response.json().then((pokemon) => {
              appendPokemon(pokemon);
              fetch('https://pokeapi.co/api/v2/pokemon/kakuna').then((response) => {
              // console.log(response.json().then());
                response.json().then((pokemon) => {
                  appendPokemon(pokemon);
                });
              });
            });
          });
        });
      });
    });
  });
}; */

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

const fetchPokemon = () => {
  getPokemonPromise('squirtle')
    .then(() => getPokemonPromise('pikachu'))
    .then(() => getPokemonPromise('rattata'))
    .then(() => getPokemonPromise('charizard'))
    .catch((erro) => console.log(erro));
};

window.onload = () => {
  fetchPokemon();
};
