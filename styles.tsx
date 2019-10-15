import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridColumn: {
    // alignItems: "center",
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // padding: "1em",
  },
  gridRow: {
    flex: 1,
    alignContent: "center",
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  tile: {
    // alignItems: "center",
    // display: "flex",
    // backgroundColor: "#d32f2f",
    // //backgroundSize: "25em",
    // height: "5em",
    // justifyContent: "center",
    // margin: "0.25em",
    // width: "5em"
  },
  tileEmpty: {
    // height: "5em",
    // margin: "0.25em",
    // width: "5em"
  },
  tileValue: {
    color: "white",
    textAlign: "center",
  }



});