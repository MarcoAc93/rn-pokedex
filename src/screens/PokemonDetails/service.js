import pokedexAPI from '../../api/pokemon';

export const getDescription = (pokemonId) =>
  pokedexAPI.get(`/pokemon-species/${pokemonId}`);
