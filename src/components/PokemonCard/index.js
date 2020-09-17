import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const PokemonCard = ({ name, imageUrl }) => (
  <View style={styles.cardContainer}>
    <View style={styles.wrapper}>
      <Image source={{ uri: imageUrl }} style={styles.imageSize} />
      <Text>{name}</Text>
    </View>
  </View>
);

export default PokemonCard;
