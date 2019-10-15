import React from 'react';
import {
  View,
  Text,
  Button,
  Platform
} from 'react-native';
import styles from "../../styles";

import Grid from "../components/Grid";
import {buildGrid} from "../gameEngine/game";

const GameScreen : React.FunctionComponent = ({navigation}) => {
  
  function onClickTile() {
    console.log("coucou");
  }

  function onClick() {
    return "";
  }

   const grid = buildGrid(4);

  return (
    <View className={styles.container}>
       <Grid
          onClick={onClickTile}
          grid={grid}
          readOnly={true}
          resolvedGrid={[]}
          showNumbers={false}
          tileToHighLight={2}
      />
    </View>
  );
};


export default GameScreen;
