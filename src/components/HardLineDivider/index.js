import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const HardLineDivider = (props) => {
  return (
    <View style={styles.statisticsHeaderWrapper}>
      <View style={styles.hardLine} />
      <Text style={styles.statisticsText}>{props.headerText}</Text>
      <View style={styles.hardLine} />
    </View>
  );
};

export default HardLineDivider;
