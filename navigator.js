import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import PokemonList from './src/screens/PokemonList/';
import PokemonDetails from './src/screens/PokemonDetails/';

import Header from './src/components/Header';

const navigator = createStackNavigator(
  {
    index: PokemonList,
    Details: PokemonDetails,
  },
  {
    defaultNavigationOptions: {
      headerBackground: () => <Header />,
      title: '',
    },
  },
);

const App = createAppContainer(navigator);

export default App;
