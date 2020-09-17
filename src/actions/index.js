import pokemonAPI from '../api/pokemon';
import {
  GET_ALL_POKEMONS,
  GET_ALL_POKEMONS_ERROR,
  GET_ONE_POKEMON,
  GET_ONE_POKEMON_ERROR,
  SAVE_NEXT_PAGINATION,
  APPEND_POKEMON,
  APPEND_POKEMON_ERROR,
  SEARCH_POKEMON,
  REMOVE_POKEMON,
} from '../constants';

const allPokemons = (payload) => ({
  type: GET_ALL_POKEMONS,
  payload,
});

const allPokemonsError = (payload) => ({
  type: GET_ALL_POKEMONS_ERROR,
  payload,
});

const singlePokemon = (payload) => ({
  type: GET_ONE_POKEMON,
  payload,
});

const singlePokemonError = (payload) => ({
  type: GET_ONE_POKEMON_ERROR,
  payload,
});

const nextPagination = (payload) => ({
  type: SAVE_NEXT_PAGINATION,
  payload,
});

const appendPokemon = (payload) => ({
  type: APPEND_POKEMON,
  payload,
});

const appendPokemonError = (error) => ({
  type: APPEND_POKEMON_ERROR,
  payload: error,
});

export const getAllPokemons = () => {
  return function action(dispatch) {
    return pokemonAPI
      .get('/pokemon', { params: { limit: 50 } })
      .then((response) => {
        const {
          data: { results, next },
        } = response;
        dispatch(allPokemons(results));
        dispatch(nextPagination(next));
      })
      .catch((error) => {
        const {
          response: { data },
        } = error;
        dispatch(allPokemonsError(data));
      });
  };
};

export const getPokemon = (pokemonId) => {
  return function action(dispatch) {
    return pokemonAPI
      .get(`/pokemon/${pokemonId}`)
      .then((response) => {
        const { data } = response;
        dispatch(singlePokemon(data));
      })
      .catch((error) => {
        const {
          response: { data },
        } = error;
        dispatch(singlePokemonError(data));
      });
  };
};

export const getNextPagination = (url) => {
  return function action(dispatch) {
    const params = url.split('?')[1];
    return pokemonAPI
      .get(`/pokemon?${params}`)
      .then((response) => {
        const {
          data: { results, next },
        } = response;
        dispatch(appendPokemon(results));
        dispatch(nextPagination(next));
      })
      .catch((error) => {
        const {
          response: { data },
        } = error;
        dispatch(appendPokemonError(data));
      });
  };
};

export const findPokemon = (pokemonName) => {
  return function action(dispatch) {
    dispatch({ type: SEARCH_POKEMON, payload: pokemonName });
  };
};

export const removeCurrentPokemon = () => {
  return function action(dispatch) {
    dispatch({
      type: REMOVE_POKEMON,
      payload: {},
    });
  };
};
