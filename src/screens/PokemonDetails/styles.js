import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    margin: 10,
  },
  caracteristicsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
    marginBottom: 10,
    height: 150,
  },
  fiftyPercent: {
    width: '50%',
  },
  image: {
    height: 150,
    width: 150,
    position: 'absolute',
    right: 0,
  },
  grayText: {
    color: 'gray',
  },
  boldBlack: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  boldGray: {
    fontWeight: 'bold',
    color: 'gray',
  },
  spaceEvenly: {
    justifyContent: 'space-evenly',
  },
  centerText: {
    textAlign: 'center',
  },
  statisticsContainer: {
    flex: 1,
    paddingHorizontal: 30,
  },
});
