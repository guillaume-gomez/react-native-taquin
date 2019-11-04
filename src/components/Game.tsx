import React, { Component } from 'react';

import Grid from './Grid';

import withLoader from '../withLoader';

import Button from '../ui/Button';
import Switch from '../ui/Switch';
const LoaderButton = withLoader(Button);

//import { suggestFactory } from '../../services/suggestMoveService';

const labels = {
    off: 'Hide',
    on: 'Show',
    title: 'Display the numbers',
};

interface GameInterface {
  currentGrid: Array;
  isVictory: boolean;
  onClickTile: () => void;
  resolvedGrid: Array;
  suggestedTile: number;
}


const Game : React.FunctionComponent<GameInterface> = ({
  currentGrid,
  isVictory,
  onClickTile,
  resolvedGrid,
  suggestedTile
}) => {

  const [ showTileNumbers, setShowTileNumbers ] = useState(false);
  const [ loadingAdvice, setLoadingAdvice ] = useState(false);

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
  };


  return (
    <div>
      {currentGrid && (
        <Grid
            onClick={onClickTile}
            grid={currentGrid}
            readOnly={isVictory}
            resolvedGrid={resolvedGrid}
            showNumbers={showTileNumbers}
            tileToHighLight={suggestedTile}
        />
      )}
      <Switch labels={labels} onToggle={handleOnToggle} />
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
      )}
    </div>
  );
};

export default Game;