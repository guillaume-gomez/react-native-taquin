import ClassNames from 'classnames';

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Platform,
  Image
} from 'react-native';
import styles from "../../styles";


//import Fade from '../transitions/Fade';

interface TileInterface {
    enabled: boolean;
    onClick: () => void;
    pulse?: boolean;
    showNumbers: boolean;
    style: StyleSheet;
    tileImage: string;
    tileImageCoords: string;
    tileValue: number;

}

const Tile : React.FunctionComponent<TileInterface> = ({
  enabled = true,
  onClick,
  pulse = false,
  showNumbers = true,
  style,
  tileImage,
  tileImageCoords,
  tileValue}) => {

  function handleClick() {
    if (enabled) {
      onClick(tileValue);
    }
  }

  const tileClass = ClassNames('puzzle-tile', 'z-depth-3', { pulse: pulse, 'puzzle-tile-hover': enabled });
  
  console.log(tileImage)
  return (
    <View 
      style={style}
      onClick={handleClick}>
      {
       !tileImage ? 
         <Text style={styles.tileValue}>{tileValue}</Text>
         :
         <Image
          style={{width: 50, height: 50}}
          source={tileImage}
        />
      }
    </View>
  );
};

export default Tile;

//in return
        /*<Fade in={showNumbers}>
            <Text className="puzzle-tile-value">{tileValue}</Text>
        </Fade>*/