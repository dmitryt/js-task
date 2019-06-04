import * as actionTypes from './actionTypes';
import { ICarsResponse, ICar } from '../../services/api/model/car';
export { ICar } from '../../services/api/model/car';

export interface IQuery {
  color: string;
  manufacturer: string;
  sort: string;
  page: number;
}

export interface IStorage {
  [stockNumber: string]: ICar;
}

export interface IStoreState {
  isLoading: boolean;
  carsIds: number[];
  itemsPerPage: number;
  storage: IStorage;
  query: IQuery;
  pages: number;
  total: number;
  loadingError: Error | null;
}

export interface IFetchCarsRequestAction {
  type: typeof actionTypes.FETCH_CARS_REQUEST;
}

export interface IFetchCarsSuccessAction {
  type: typeof actionTypes.FETCH_CARS_SUCCESS;
  data: ICarsResponse;
}

export interface IFetchCarsFailureAction {
  type: typeof actionTypes.FETCH_CARS_FAILURE;
  error: Error;
}

export interface IFetchCarRequestAction {
  type: typeof actionTypes.FETCH_CAR_REQUEST;
  stockNumber: string;
}

export interface IFetchCarSuccessAction {
  type: typeof actionTypes.FETCH_CAR_SUCCESS;
  data: ICar;
}

export interface IFetchCarFailureAction {
  type: typeof actionTypes.FETCH_CAR_FAILURE;
  error: Error;
}

export interface IChangeQueryAction {
  type: typeof actionTypes.CHANGE_QUERY;
  data: IQuery;
}

export interface IApplyQueryAction {
  type: typeof actionTypes.APPLY_QUERY;
  data: IQuery;
}

export interface IChangeSortAction {
  type: typeof actionTypes.CHANGE_SORT;
  value: string;
}

export interface IChangePageAction {
  type: typeof actionTypes.CHANGE_PAGE;
  value: number;
}

export type IAction =
  | IFetchCarsRequestAction
  | IFetchCarsSuccessAction
  | IFetchCarsFailureAction
  | IFetchCarRequestAction
  | IFetchCarSuccessAction
  | IFetchCarFailureAction
  | IApplyQueryAction
  | IChangeQueryAction
  | IChangeSortAction
  | IChangePageAction;
