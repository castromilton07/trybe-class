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

const fetchPokemon = () => {
  /* requestPokemon((pokemon) => {
    // console.log(pokemon);
    appendPokemon(pokemon);
  }); */

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
};

window.onload = () => {
  fetchPokemon();
};