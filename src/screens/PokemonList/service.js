import pokedexAPI from '../../api/pokedex';

export const getAll = pokedexAPI.get('/pokemon', { params: { limit: 100 } });
