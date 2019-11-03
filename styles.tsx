import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridColumn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridRow: {
    alignContent: "center",
    flexDirection: 'row',
  },
  tile: {
    width: 80,
    height: 80,
    display: "flex",
    backgroundColor: "#d32f2f",
    justifyContent: "center",
  },
  tileEmpty: {
    width: 80,
    height: 80
  },
  tileValue: {
    fontSize: 30,
    textAlign: "center",
    color: "white",
    alignItems: "center",
  },
  tileImg: {
    width: 80,
    height: 80,
    display: "flex",
    alignItems: "center"
  }

});