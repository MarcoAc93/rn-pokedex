import { getPokemonId } from '../utils';

import {
  GET_ALL_POKEMONS,
  GET_ALL_POKEMONS_ERROR,
  GET_ONE_POKEMON,
  GET_ONE_POKEMON_ERROR,
  SAVE_NEXT_PAGINATION,
  APPEND_POKEMON,
  SEARCH_POKEMON,
  REMOVE_POKEMON,
} from '../constants';

const initialState = {
  pokemonsArray: [],
  pokemonsArrayTemp: [],
  currentPokemon: {},
  nextPagination: '',
  error: {},
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        pokemonsArray: action.payload,
        pokemonsArrayTemp: action.payload,
        error: {},
      };
    case GET_ALL_POKEMONS_ERROR:
      return {
        ...state,
        pokemonsArray: [],
        error: action.payload,
      };
    case GET_ONE_POKEMON:
      return {
        ...state,
        currentPokemon: action.payload,
        error: {},
      };
    case GET_ONE_POKEMON_ERROR:
      return {
        ...state,
        currentPokemon: {},
        error: action.payload,
      };
    case SAVE_NEXT_PAGINATION:
      return {
        ...state,
        nextPagination: action.payload,
      };
    case APPEND_POKEMON:
      return {
        ...state,
        pokemonsArray: [...state.pokemonsArray, ...action.payload],
        pokemonsArrayTemp: [...state.pokemonsArray, ...action.payload],
      };
    case SEARCH_POKEMON:
      let pokemonsArray = [];
      let pokemonsArrayTemp = [];

      if (action.payload === '') {
        pokemonsArray = state.pokemonsArrayTemp;
        pokemonsArrayTemp = state.pokemonsArrayTemp;
      } else {
        pokemonsArray = [
          ...state.pokemonsArrayTemp.filter(
            (pokemon) =>
              pokemon.name.includes(action.payload) ||
              getPokemonId(pokemon.url) === action.payload,
          ),
        ];
        pokemonsArrayTemp = state.pokemonsArrayTemp;
      }
      return {
        ...state,
        pokemonsArray,
        pokemonsArrayTemp,
      };
    case REMOVE_POKEMON:
      return {
        ...state,
        currentPokemon: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonReducer;
