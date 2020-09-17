import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import StatisticsHeader from '../../components/HardLineDivider';
import StatProgress from '../../components/ProgressStat';
import * as Actions from '../../actions';
import { capitalize } from '../../utils';
import I18n from '../../utils/i18n';
import { getDescription } from './service';

import styles from './styles';

const selectDescription = (textsArray) => {
  const [language] = I18n.locale.split('-');
  const byLanguage = textsArray.filter(
    (entries) => entries.language.name === language,
  );
  const random = Math.floor(Math.random() * byLanguage.length);
  const description = byLanguage[random].flavor_text;
  return description;
};

const requestDescription = (pokemonId, setDescription) => {
  getDescription(pokemonId)
    .then((response) => {
      const { data } = response;
      const description = selectDescription(data.flavor_text_entries);
      setDescription(description);
    })
    .catch((error) => {
      console.log(error.response);
    });
};

const formatStatText = (stat) => {
  switch (stat) {
    case 'hp':
      return 'HP';
    case 'attack':
      return I18n.t('pokemon.attack');
    case 'defense':
      return I18n.t('pokemon.defense');
    case 'special-attack':
      return I18n.t('pokemon.specialAttack');
    case 'special-defense':
      return I18n.t('pokemon.specialDefense');
    case 'speed':
      return I18n.t('pokemon.speed');
    default:
      return '';
  }
};

const PokemonDetails = ({
  navigation: { getParam },
  getPokemon,
  pokemon,
  removeCurrentPokemon,
}) => {
  const [description, setDescription] = useState('');

  useEffect(() => {
    const pokemonId = getParam('pokemonId');
    getPokemon(pokemonId);
    requestDescription(pokemonId, setDescription);

    return () => removeCurrentPokemon();
  }, []);

  if (!pokemon.id) {
    return null;
  }
  const { sprites, id, name, height, weight } = pokemon;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.caracteristicsWrapper}>
        <View style={styles.fiftyPercent}>
          <Image source={{ uri: sprites.front_default }} style={styles.image} />
        </View>
        <View style={[styles.fiftyPercent, styles.spaceEvenly]}>
          <Text style={styles.grayText}>#{id}</Text>
          <Text style={styles.boldBlack}>{capitalize(name)}</Text>
          <Text style={styles.grayText}>
            <Text style={styles.boldGray}>{I18n.t('pokemon.height')}: </Text>
            {height}m
          </Text>
          <Text style={styles.grayText}>
            <Text style={styles.boldGray}>{I18n.t('pokemon.weight')}: </Text>
            {weight}kg
          </Text>
        </View>
      </View>
      <View>
        <Text style={[styles.grayText, styles.centerText]}>{description}</Text>
      </View>
      <View style={styles.statisticsContainer}>
        <StatisticsHeader headerText={I18n.t('pokemon.statistics')} />
        {pokemon.stats.map((stat, index) => (
          <StatProgress
            statName={formatStatText(stat.stat.name)}
            baseStat={stat.base_stat}
            key={index}
          />
        ))}
      </View>
    </View>
  );
};

PokemonDetails.navigationOptions = () => {
  return {
    headerBackTitle: I18n.t('header.back'),
    headerBackTitleStyle: {
      color: '#FFF',
    },
  };
};

const mapStateToProps = (state) => ({ pokemon: state.pokemons.currentPokemon });

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetails);
