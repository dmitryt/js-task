import * as actionTypes from './actionTypes';

export interface IFavouriteCars {
  [key: string]: boolean;
}

export interface IStoreState {
  favouriteCars: IFavouriteCars;
}

export interface IToggleFavourites {
  type: typeof actionTypes.TOGGLE_FAVOURITES;
  stockNumber: string;
}

export type IAction = IToggleFavourites;
