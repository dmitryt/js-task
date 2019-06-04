import { createSelector } from 'reselect';

import { IAppState } from '../index';
import { IStoreState, IFavouriteCars } from './types';

export const select = (store: IAppState): IStoreState => store.metadata;

export const favouriteCarsSelector = (state: IAppState): IFavouriteCars =>
  select(state).favouriteCars;

export const isCarFavouriteSelector = (stockNumber: string) =>
  createSelector(
    favouriteCarsSelector,
    (favouriteCars: IFavouriteCars): boolean => !!favouriteCars[stockNumber]
  );
