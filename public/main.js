function fetchPokemon() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=3")
    .then((response) => response.json())
    .then(function (allpokemon) {
      allpokemon.results.forEach(function (pokemon) {
        fetchPokemonData(pokemon);
      });
    });
}

function fetchPokemonData(pokemon) {
  let url = pokemon.url;
  fetch(url)
    .then((response) => response.json())
    .then(function (pokeData) {
      console.log(pokeData);
    });
}

function showPokemons() {
  const show = document.getElementById("showpoke");
  show.value = "Show Pokemon";
  show.addEventListener("click", function () {
    fetchPokemon();
  });
}

showPokemons();
