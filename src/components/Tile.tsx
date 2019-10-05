import ClassNames from 'classnames';

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Platform
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

  const tileStyle =
    tileImage && tileImageCoords
        ? {
            backgroundImage: `url(${tileImage})`,
            backgroundPosition: tileImageCoords,
            ...style,
          }
        : {
            ...style,
  };

  return (
    <View
      className={tileClass}
      style={tileStyle}
      onClick={this.handleClick}
    >
        {/*<Fade in={showNumbers}>
            <span className="puzzle-tile-value">{tileValue}</span>
        </Fade>*/}
        <Text className="puzzle-tile-value">{tileValue}</Text>
    </View>
  );
};

export default Tile;