import { DEFAULT_PUZZLE_SIZE } from "../constants";

export const EMPTY_VALUE = 0;

export const buildGrid = (size = DEFAULT_PUZZLE_SIZE) => {
  return Array(size)
    .fill(1)
    .map((val, y) =>
      Array(size)
        .fill(1)
        .map((val, x) => {
          const value = y * size + x + 1;
          return value === size * size ? EMPTY_VALUE : value;
      }),
    );
};

export const initGame = async (size = DEFAULT_PUZZLE_SIZE) => {
  let resolvedGrid = buildGrid(size);
  let currentGrid = await shuffle(resolvedGrid);

  return {
    currentGrid,
    isVictory: false,
    resolvedGrid,
    turn: 0,
  };
};

export const deepCopyGrid = grid => grid.map(row => [...row]);

export const areGridsEquals = (grid1, grid2) => {
  if (!grid1 || !grid2) {
    return false;
  }

  if (grid1.length != grid2.length) {
    return false;
  }

  const sizeY = grid1.length;
  for (let y = 0; y < sizeY; y++) {
    if (grid1[y].length !== grid2[y].length) {
      return false;
    }
    const sizeX = grid1[y].length;
    for (let x = 0; x < sizeX; x++) {
      if (grid1[y][x] !== grid2[y][x]) {
          return false;
      }
    }
  }
  return true;
};

export const areCoordsEquals = (coords1, coords2) => {
  return (
    coords1 && coords2 && coords1.y === coords2.y && coords1.x === coords2.x
  );
};

export const findTileByValue = (grid, valueToSearch) => {
  for (let y = 0; y < grid.length; y++) {
    let x = grid[y].findIndex(value => value === valueToSearch);
    if (x !== -1) {
        return { y, x };
    }
  }
  throw `The tile with value ${valueToSearch} doesn't exist.`;
};

export const findEmptyTile = grid => findTileByValue(grid, EMPTY_VALUE);

export const listCoordsMovableTiles = grid => {
  const { y, x } = findEmptyTile(grid);

  return [
    y > 0 && { y: y - 1, x },
    x + 1 < grid.length && { y, x: x + 1 },
    y + 1 < grid.length && { y: y + 1, x },
    x > 0 && { y, x: x - 1 },
  ].filter(x => x);
};

export const isCoordsTileInMovableTiles = (grid, coordsTileToMove) => {
  return listCoordsMovableTiles(grid).some(coords =>
      areCoordsEquals(coords, coordsTileToMove),
  );
}

export const listMovableTiles = (grid) => {
  return listCoordsMovableTiles(grid).map(coords => grid[coords.y][coords.x]);
}

export const isTileInMovableTiles = (grid, tileToMove) => {
  return listMovableTiles(grid).some(tile => tile === tileToMove);
}

export const move = (grid, coordsTileToMove) => {
  if (!isCoordsTileInMovableTiles(grid, coordsTileToMove)) {
    throw `The tile at coords (${coordsTileToMove.y}, ${
        coordsTileToMove.x
    }) is not movable.`;
  }

  let emptyTileCoords = findEmptyTile(grid);
  let newCoords = findTileByValue(
    grid,
    grid[coordsTileToMove.y][coordsTileToMove.x],
  );

  let newGrid = deepCopyGrid(grid);
  newGrid[emptyTileCoords.y][emptyTileCoords.x] =
    grid[newCoords.y][newCoords.x];
  newGrid[newCoords.y][newCoords.x] =
    grid[emptyTileCoords.y][emptyTileCoords.x];
  return newGrid;
};

export const moveTile = ({ currentGrid, resolvedGrid, turn }, tile) => {
  const coordsTileToMove = findTileByValue(currentGrid, tile);
  const newCurrentGrid = move(currentGrid, coordsTileToMove);
  const isVictory = areGridsEquals(newCurrentGrid, resolvedGrid);

  return {
    currentGrid: newCurrentGrid,
    resolvedGrid,
    isVictory,
    turn: turn + 1,
  };
};

export const dirFromMove = (grid, tile) => {
  const coords = findTileByValue(grid, tile);
  const coordsEmptyTile = findEmptyTile(grid);

  return {
    y: coordsEmptyTile.y - coords.y,
    x: coordsEmptyTile.x - coords.x,
  };
};


export const SHUFFLE_DURATION = 2000;
export const SLEEP_DURATION = 1;

export const chooseCoords = (coordsList) => {
  coordsList[Math.floor(Math.random() * coordsList.length)];
}

const sleep = (duration) => new Promise(resolve => setTimeout(resolve, duration));

export const shuffle = async (grid, shuffleDuration = SHUFFLE_DURATION) => {
  let stopShuffling = false;
  let shuffledGrid = deepCopyGrid(grid);

  const startShuffling = async () => {
      while (!stopShuffling) {
          const coords = listCoordsMovableTiles(shuffledGrid);
          shuffledGrid = move(shuffledGrid, chooseCoords(coords));
          await sleep(SLEEP_DURATION);
      }
  };

  return await Promise.race([
      sleep(shuffleDuration).then(() => {
          stopShuffling = true;
          return shuffledGrid;
      }),
      new Promise(() => startShuffling()),
  ]);
};