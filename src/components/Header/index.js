import React from 'react';
import { Image, View, StyleSheet, Platform } from 'react-native';

const Header = () => (
  <View style={styles.container}>
    <Image
      source={{
        uri:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png',
      }}
      style={[styles.image, Platform.OS === 'ios' ? styles.marginTop20 : null]}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 30,
    width: 90,
  },
  marginTop20: {
    marginTop: 20,
  },
});

export default Header;
