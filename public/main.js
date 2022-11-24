// function getEndpoint() {
//   const pokex = document.getElementById("pokex");
// }

function displayBackend(backendData) {
  const pokex = document.getElementById("pokex");
  pokex.innerHTML = backendData;
  console.log(backendData);
}

function fetchPokemon() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=3")
    .then((response) => response.json())
    .then((allpokemon) => console.log(allpokemon));
}

// // endpoints get pokemon data
// function getPokemons() {
//   const pokemons = fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
//   return pokemons;
// }

// getPokemons();
