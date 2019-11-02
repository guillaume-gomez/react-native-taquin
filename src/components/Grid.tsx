import React, { useState, useEffect } from 'react';
import ClassNames from 'classnames';
import {
  View
} from 'react-native';

import { 
  DEFAULT_IMAGE_URL,
  IMAGE_URLS,
  DURATION_TRANSLATE,
  SIZE_TILE
} from '../constants';

import Tile from './Tile';

import { dirFromMove, isTileInMovableTiles } from '../gameEngine/game';
import { associateTileToBackground, choiceInArray } from '../gameEngine/helper';

import styles from "../../styles";


const buildTranslateStyle = (translate, translatingDir) => {
  return translate
  ? {
      transform: `translate(${translatingDir.x}em, ${
          translatingDir.y
      }em)`,
      transition: `transform ${DURATION_TRANSLATE}ms ease-out`,
    }
  : {
      transform: 'translate(0,0)',
    };
};

const translateTile = (grid, tile, tileSize) => {
    const dir = dirFromMove(grid, tile);
    return {
        y: dir.y * tileSize,
        x: dir.x * tileSize,
    };
};

interface GridInterface {
  grid: Array;
  onClick: Function;
  readOnly: boolean;
  resolvedGrid: Array;
  showNumbers: boolean;
  tileToHighlight: number;
}

const Grid : React.FunctionComponent<GridInterface> = ({
  grid,
  onClick,
  readOnly = true,
  resolvedGrid,
  showNumbers = true,
  tileToHighlight
}) => {

  const [translating, setTranslating] = useState(false);
  const [translatingDir, setTranslatingDir] = useState({ x: 0,y: 0 });
  const [translatingTile, setTranslatingTile] = useState(0);
  const [imageCoords, setImageCoords] = useState({});
  const [imageUrl, setImageUrl] = useState("");

  function handleClickTile(tile) {
    const dir = translateTile(grid, tile, SIZE_TILE);
    setTranslating(true);
    setTranslatingTile(tile);
    setTranslatingDir(dir);

    setTimeout(() => {
        onClick(translatingTile);
        setTranslating(false);
    }, DURATION_TRANSLATE);
  };

  useEffect(() => {
      const imageCoords = associateTileToBackground(resolvedGrid);
      const imageUrl = choiceInArray(
          IMAGE_URLS.length > 0 ? IMAGE_URLS : [DEFAULT_IMAGE_URL],
      );
      setImageUrl(imageUrl);
      setImageCoords(imageCoords);
  }, []);

  return (
    <View style={styles.grid}>
      <View style={styles.gridColumn}>
        {grid.map((row, rowKey) => (
          <View style={styles.gridRow} key={rowKey}>
            {row.map(
              tileValue =>
                tileValue === 0 ? (
                  <View
                      key={tileValue}
                      style={styles.tileEmpty}
                  />
              ) : (
                <Tile
                    enabled={
                      !readOnly &&
                      isTileInMovableTiles(
                          grid,
                          tileValue,
                      )
                    }
                    key={tileValue}
                    onClick={handleClickTile}
                    pulse={tileValue === tileToHighlight}
                    showNumbers={showNumbers}
                    style={styles.tile}
                    tileImage={imageUrl}
                    tileImageCoords={imageCoords[tileValue]}
                    tileValue={tileValue}
                />
              ),
            )}
          </View>
        ))}
      </View>
    </View>
  );
}

export default Grid;

// on tile 
 {/* style={buildTranslateStyle(
                                            translating &&
                                                translatingTile === tileValue,
                                            translatingDir,
                                        )}*/}