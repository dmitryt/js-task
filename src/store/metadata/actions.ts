import * as actionTypes from './actionTypes';
import * as types from './types';

export const toggleFavouritesAction = (
  stockNumber: string
): types.IToggleFavourites => ({
  type: actionTypes.TOGGLE_FAVOURITES,
  stockNumber
});
