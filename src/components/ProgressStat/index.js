import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const limitStat = (baseState) => {
  if (baseState > 100) {
    return 100;
  }
  return baseState;
};

const ProgressStat = ({ statName, baseStat }) => (
  <View style={styles.mainContainer}>
    <View style={styles.flex2}>
      <Text>{statName}</Text>
    </View>
    <View style={styles.grayBrackground}>
      <View
        style={[styles.witheBox, { left: `${limitStat(baseStat) / 1.1}%` }]}
      >
        <Text style={styles.centerText}>{baseStat}</Text>
      </View>
      <View style={[styles.blueBox, { width: `${limitStat(baseStat)}%` }]} />
    </View>
  </View>
);

export default ProgressStat;
