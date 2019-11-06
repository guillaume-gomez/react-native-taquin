import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

import { 
  DEFAULT_IMAGE_URL,
  IMAGE_URLS
} from '../constants';


import Grid from './Grid';

import { buildGrid } from "../gameEngine/game";
import { choiceInArray } from '../gameEngine/helper';
import { splitImagesIntoTiles } from "../gameEngine/spriteGeneratorModule";


import withLoader from '../withLoader';
//import Button from '../ui/Button';
//import Switch from '../ui/Switch';
//const LoaderButton = withLoader(Button);

//import { suggestFactory } from '../../services/suggestMoveService';

const labels = {
    off: 'Hide',
    on: 'Show',
    title: 'Display the numbers',
};

interface GameInterface {
  isVictory?: boolean;
  onClickTile?: () => void;
  suggestedTile?: number;
}


const Game : React.FunctionComponent<GameInterface> = ({
  isVictory,
  onClickTile,
  suggestedTile
}) => {

  const [ showTileNumbers, setShowTileNumbers ] = useState(false);
  const [ loadingAdvice, setLoadingAdvice ] = useState(false);
  const [ loadingSprites, setLoadingSprites ] = useState(true);
  const [ imageUrls, setImageUrls] = useState([]);

  const nbCellRow = 4;

  async function generateSprite(imageUrl: string) {
    const urls = await splitImagesIntoTiles(4, 500, imageUrl);
    setImageUrls(urls);
    setLoadingSprites(false);
  }

  useEffect(() => {
    const imageUrl = choiceInArray(
      IMAGE_URLS.length > 0 ? IMAGE_URLS : [DEFAULT_IMAGE_URL],
    );
    generateSprite(imageUrl);
  }, []);


    // requestSuggest = async () => {
    //     const { currentGrid, resolvedGrid } = this.state;
    //     this.setState({ loadingAdvice: true });
    //     try {
    //         const { Tile } = await suggestFactory()(currentGrid, resolvedGrid);
    //         this.setState({
    //             loadingAdvice: false,
    //             suggestedTile: Tile,
    //         });
    //     } catch (error) {
    //         console.error(error);
    //         // TODO : catch the errors in order to display them to the user.
    //     }
    // };

  function handleOnToggle(toggleState) {
    setShowTileNumbers(toggleState);
  };


  function handleClickSuggest() {
    if (loadingAdvice) {
      return;
    }
    //this.requestSuggest();
  }

  const grid = buildGrid(nbCellRow);

  if(!!loadingSprites) {
    return (<View><Text>Load sprites</Text></View>);
  }

  return (
    <View>
      {grid && (
         <Grid
            onClick={onClickTile}
            grid={grid}
            readOnly={true}
            resolvedGrid={[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 0]]}
            imageUrls={imageUrls}
            showNumbers={false}
            tileToHighLight={2}
        />
      )}
     {/* <Switch labels={labels} onToggle={handleOnToggle} />
      {!isVictory && (
        <div className="center">
          <LoaderButton
              isLoading={loadingAdvice}
              size="small"
              icon="help_outline"
              label="Ask for help"
              onClick={handleClickSuggest}
          />
        </div>
      )}*/}
    </View>
  );
};

export default Game;