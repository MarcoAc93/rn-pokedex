import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  grayBrackground: {
    backgroundColor: '#D8D8D8',
    flex: 7,
  },
  flex2: {
    flex: 2,
  },
  witheBox: {
    position: 'absolute',
    zIndex: 1,
    height: 20,
    width: 40,
    backgroundColor: 'white',
    borderRadius: 3,
  },
  centerText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  blueBox: {
    backgroundColor: 'blue',
    borderRadius: 3,
    height: 20,
  },
});
