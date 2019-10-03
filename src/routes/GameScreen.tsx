import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Platform
} from 'react-native';
import styles from "../../styles";

import Tile from "../components/Tile";

const GameScreen : React.FunctionComponent = ({navigation}) => {
  
  function handleClickTile() {
    console.log("coucou");
  }

  return (
    <View style={styles.container}>
        <Tile
          enabled={true}
          key={"tileValue"}
          onClick={handleClickTile}
          pulse={false}
          showNumbers={true}
          style={{}}
          tileImage={"imageUrl"}
          tileImageCoords={"imageCoords[tileValue]"}
          tileValue={"tileValue"}
      />
      
    </View>
  );
};


export default GameScreen;
