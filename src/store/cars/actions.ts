import * as actionTypes from './actionTypes';
import * as types from './types';

import { ICarsResponse } from '../../services/api/model/car';

export const fetchCarsAction = (): types.IFetchCarsRequestAction => ({
  type: actionTypes.FETCH_CARS_REQUEST
});

export const fetchCarsSuccessAction = (
  data: ICarsResponse
): types.IFetchCarsSuccessAction => ({
  type: actionTypes.FETCH_CARS_SUCCESS,
  data
});

export const fetchCarsFailureAction = (
  error: Error
): types.IFetchCarsFailureAction => ({
  type: actionTypes.FETCH_CARS_FAILURE,
  error
});

export const fetchCarAction = (
  stockNumber: string
): types.IFetchCarRequestAction => ({
  type: actionTypes.FETCH_CAR_REQUEST,
  stockNumber
});

export const fetchCarSuccessAction = (
  data: types.ICar
): types.IFetchCarSuccessAction => ({
  type: actionTypes.FETCH_CAR_SUCCESS,
  data
});

export const fetchCarFailureAction = (
  error: Error
): types.IFetchCarFailureAction => ({
  type: actionTypes.FETCH_CAR_FAILURE,
  error
});

export const changeQueryAction = (
  data: types.IQuery
): types.IChangeQueryAction => ({
  type: actionTypes.CHANGE_QUERY,
  data
});

export const applyQueryAction = (
  data: types.IQuery
): types.IApplyQueryAction => ({
  type: actionTypes.APPLY_QUERY,
  data
});

export const changeSortAction = (value: string): types.IChangeSortAction => ({
  type: actionTypes.CHANGE_SORT,
  value
});

export const changePageAction = (value: number): types.IChangePageAction => ({
  type: actionTypes.CHANGE_PAGE,
  value
});
