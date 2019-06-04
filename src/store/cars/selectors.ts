import { createSelector } from 'reselect';

import { IStorage, IQuery, IStoreState } from './types';
import { IAppState } from '../index';
import { favouriteCarsSelector } from '../metadata/selectors';
import { IFavouriteCars } from '../metadata/types';

import { ICar } from '../../services/api/model/car';

export const select = (store: IAppState): IStoreState => store.cars;

export const querySelector = (store: IAppState): IQuery => select(store).query;
export const isCarsLoadingSelector = (store: IAppState): boolean =>
  select(store).isLoading;
export const pagesSelector = (store: IAppState): number => select(store).pages;
export const totalSelector = (store: IAppState): number => select(store).total;
export const carsStorageSelector = (store: IAppState): IStorage =>
  select(store).storage;
export const carsIdsSelector = (store: IAppState): number[] =>
  select(store).carsIds;
export const itemsPerPageSelector = (store: IAppState): number =>
  select(store).itemsPerPage;

export const sortSelector = createSelector(
  querySelector,
  (query: IQuery): string => query.sort
);

export const pageSelector = createSelector(
  querySelector,
  (query: IQuery): number => query.page
);

export const carsSelector = createSelector(
  carsIdsSelector,
  carsStorageSelector,
  favouriteCarsSelector,
  (ids: number[], storage: IStorage, favouriteCars: IFavouriteCars): ICar[] =>
    ids
      .reduce(
        (acc, id) => (favouriteCars[id] ? [id, ...acc] : [...acc, id]),
        []
      )
      .map(id => storage[id])
);

export const carSelector = (stockNumber: string) =>
  createSelector(
    carsStorageSelector,
    (storage: IStorage): ICar => storage[stockNumber]
  );
