import { Asset } from 'expo-asset';
import * as ImageManipulator from 'expo-image-manipulator';

// we assume that imageWith = imageHeight
export async function splitImagesIntoTiles(nbCellsRow: number, imageWidth: number, uriImage: string): string[] {
  const tileSize = parseInt(imageWidth / nbCellsRow);
  const width = tileSize;
  const height = tileSize;
  let spritesUri = [];

  for(let x = 0; x < nbCellsRow; ++x) {
    const originX = x * tileSize;
    for(let y = 0; y < nbCellsRow; ++y) {
      const originY = y * tileSize;
      const manipResult = await ImageManipulator.manipulateAsync(
        Asset.fromModule(uriImage).uri, 
        [{ crop: { originX, originY, width, height } }],
        { compress: 1, format: ImageManipulator.SaveFormat.PNG }
      );
      spritesUri = [...spritesUri, manipResult.uri];
    }
  }
  return spritesUri;
}