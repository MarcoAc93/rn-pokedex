import React, { useEffect, useState } from 'react';
import { View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions';
import PokemonCard from '../../components/PokemonCard';
import SearchInput from '../../components/SearchInput';
import { capitalize, grabImageById, getPokemonId } from '../../utils';

const PokemonList = (props) => {
  const [search, setSearch] = useState(false);

  useEffect(() => {
    const { getAllPokemons } = props;
    getAllPokemons();
  }, []);

  const {
    pokemons: { pokemonsArray },
  } = props;

  if (pokemonsArray.length === 0) {
    return null;
  }

  const lookForPokemon = (inputSearch) => {
    setSearch(true);
    const { findPokemon } = props;
    findPokemon(inputSearch.toLowerCase());
  };

  const {
    getNextPagination,
    navigation: { navigate },
    pokemons: { nextPagination },
  } = props;

  return (
    <View style={styles.wholeContainer}>
      <SearchInput inputChange={lookForPokemon} />
      <FlatList
        style={styles.paddingTop}
        data={pokemonsArray}
        numColumns={3}
        keyExtractor={(item) => `${item.name}`}
        onEndReachedThreshold={0.5}
        onScrollBeginDrag={() => {
          if (search) {
            setSearch(false);
          }
        }}
        onEndReached={() => {
          if (!search) {
            getNextPagination(nextPagination);
          }
        }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.wholeContainer}
            onPress={() => {
              navigate('Details', { pokemonId: getPokemonId(item.url) });
            }}
          >
            <PokemonCard
              name={capitalize(item.name)}
              imageUrl={grabImageById(item.url)}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wholeContainer: {
    flex: 1,
  },
  paddingTop: {
    paddingTop: 5,
  },
});

const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
