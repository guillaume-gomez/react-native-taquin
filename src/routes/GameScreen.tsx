import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Button,
  Platform
} from 'react-native';

import styles from "../../styles";

import { 
  DEFAULT_IMAGE_URL,
  IMAGE_URLS
} from '../constants';
import Grid from "../components/Grid";
import { buildGrid } from "../gameEngine/game";
import { choiceInArray } from '../gameEngine/helper';
import { splitImagesIntoTiles } from "../gameEngine/spriteGeneratorModule";

const GameScreen : React.FunctionComponent = ({navigation}) => {

  const [imageUrls, setImageUrls] = useState([]);

  function onClickTile() {
    console.log("coucou");
  }

  function onClick() {
    return "";
  }

  const nbCellRow = 4;

  async function generateSprite(imageUrl: string) {
    const imageUrls = await splitImagesIntoTiles(4, 500, imageUrl);
    setImageUrls(imageUrls);
  }

   useEffect(() => {
    const imageUrl = choiceInArray(
      IMAGE_URLS.length > 0 ? IMAGE_URLS : [DEFAULT_IMAGE_URL],
    );
    generateSprite(imageUrl);
    
  }, []);

  const grid = buildGrid(nbCellRow);

  return (
    <View style={styles.container}>
       <Grid
          onClick={onClickTile}
          grid={grid}
          readOnly={true}
          resolvedGrid={[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 0]]}
          imageUrls={imageUrls}
          showNumbers={false}
          tileToHighLight={2}
      />
    </View>
  );
};


export default GameScreen;
