import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import pokemonReducer from '../reducers/pokemonsReducer';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const reducers = combineReducers({
  pokemons: pokemonReducer,
});

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
  },
  reducers,
);

const configureStore = () => {
  return createStore(
    persistedReducer,
    compose(
      applyMiddleware(thunk),
      // window.__REDUX_DEVTOOLS_EXTENSION__ &&
      //   window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  );
};

export const store = configureStore();

export const persistor = persistStore(store);
