import React from 'react';
import {
  View
} from 'react-native';

import styles from "../../styles";

import Grid from "../components/Grid";
import Game from "../components/Game";

const GameScreen : React.FunctionComponent = ({navigation}) => {

  function onClickTile() {
    console.log("coucou");
  }

  return (
    <View style={styles.container}>
       <Game
          isVictory={false}
          onClickTile={onClickTile}
          suggestedTile={-1}
      />
    </View>
  );
};


export default GameScreen;
