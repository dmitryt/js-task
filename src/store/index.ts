import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { Router } from 'react-router';

import {
  IAction as ICarsAction,
  IStoreState as ICarsState,
  reducer as carsReducer
} from './cars';
import {
  IAction as IDictionariesAction,
  IStoreState as IDictionariesState,
  reducer as dictionariesReducer
} from './dictionaries';
import {
  IAction as IMetadataAction,
  IStoreState as IMetadataState,
  reducer as metadataReducer
} from './metadata';

export interface IAppState {
  cars: ICarsState;
  dictionaries: IDictionariesState;
  metadata: IMetadataState;
  router: Router;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    cars: carsReducer,
    dictionaries: dictionariesReducer,
    metadata: metadataReducer,
    router: connectRouter(history)
  });

export type IAction = ICarsAction | IDictionariesAction | IMetadataAction;

export type IDispatch = (action: IAction) => void;
