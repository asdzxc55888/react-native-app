const BASE_URL = "https://pokeapi.co/api/v2"

export async function getPokemons(page) {
    const response = await fetch(`${BASE_URL}/pokedex/1/`)
    let allPokemons = await response.json()
    allPokemons = allPokemons.pokemon_entries
    let pokemons = [];

    const startIndex = (page-1)*10;
    const endIndex = page*10 < allPokemons.length ? page*10 : allPokemons.length;

    for (let i = startIndex; i < endIndex; i++) {
        const pokemon = await getPokemon(allPokemons[i].entry_number);
        pokemons.push(pokemon);
    }
    return pokemons
}

export async function getPokemon(id) {
    const response = await fetch(`${BASE_URL}/pokemon/${id}/`)
    const pokemon = await response.json();
    const pokemonName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    return {
        id: pokemon.id,
        name: pokemonName,
        sprite: pokemon.sprites.other['official-artwork'].front_default,
        types: pokemon.types.map(({type}) => type.name)
    }
}