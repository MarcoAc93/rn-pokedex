import React from 'react';
import { View, TextInput } from 'react-native';
import I18n from '../../utils/i18n';
import styles from './styles';

const SearchInput = (props) => {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.input}
        placeholder={I18n.t('searchBar.search')}
        onEndEditing={({ nativeEvent: { text } }) => props.inputChange(text)}
      />
    </View>
  );
};

export default SearchInput;
