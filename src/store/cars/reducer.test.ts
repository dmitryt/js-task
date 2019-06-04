import reducer, { initialState } from './reducer';
import * as types from './types';
import * as actionTypes from './actionTypes';

import mockCars from '../../services/api/mocks/car';

describe('cars reducer', () => {
  it('should return the initial state', () => {
    const action: any = {};
    expect(reducer(undefined, action)).toEqual(initialState);
  });
  it('should set isLoading true on FETCH_CARS_REQUEST', () => {
    const startAction: types.IFetchCarsRequestAction = {
      type: actionTypes.FETCH_CARS_REQUEST
    };
    expect(reducer(initialState, startAction)).toEqual({
      ...initialState,
      isLoading: true
    });
  });
  it('should update state correctly on FETCH_CARS_SUCCESS', () => {
    const data = { cars: mockCars, totalPageCount: 25, totalCarsCount: 54 };
    const startAction: types.IFetchCarsSuccessAction = {
      type: actionTypes.FETCH_CARS_SUCCESS,
      data
    };
    const state = {
      ...initialState,
      isLoading: true
    };
    expect(reducer(state, startAction)).toEqual({
      ...initialState,
      carsIds: [32, 82, 73],
      storage: {
        32: mockCars[0],
        82: mockCars[1],
        73: mockCars[2]
      },
      pages: 25,
      total: 54
    });
  });
  it('should isLoading to false and handling an error on FETCH_CARS_FAILURE', () => {
    const error: Error = new Error('some error occurs');
    const startAction: types.IFetchCarsFailureAction = {
      type: actionTypes.FETCH_CARS_FAILURE,
      error
    };
    const state = { ...initialState, isLoading: true };
    expect(reducer(state, startAction)).toEqual({
      ...initialState,
      loadingError: error
    });
  });
  it('should set isLoading true on FETCH_CAR_REQUEST', () => {
    const startAction: types.IFetchCarRequestAction = {
      type: actionTypes.FETCH_CAR_REQUEST,
      stockNumber: '123'
    };
    expect(reducer(initialState, startAction)).toEqual({
      ...initialState,
      isLoading: true
    });
  });
  it('should update state correctly on FETCH_CAR_SUCCESS', () => {
    const data = mockCars[0];
    const startAction: types.IFetchCarSuccessAction = {
      type: actionTypes.FETCH_CAR_SUCCESS,
      data
    };
    const state = {
      ...initialState,
      isLoading: true
    };
    expect(reducer(state, startAction)).toEqual({
      ...initialState,
      carsIds: [32],
      storage: {
        32: mockCars[0]
      },
      pages: 0,
      total: 0
    });
  });
  it('should isLoading to false and handling an error on FETCH_CAR_FAILURE', () => {
    const error: Error = new Error('some error occurs');
    const startAction: types.IFetchCarFailureAction = {
      type: actionTypes.FETCH_CAR_FAILURE,
      error
    };
    const state = { ...initialState, isLoading: true };
    expect(reducer(state, startAction)).toEqual({
      ...initialState,
      loadingError: error
    });
  });
  it('should update query on APPLY_QUERY/CHANGE_QUERY', () => {
    const data = { page: 1, sort: 'asc', color: 'red', manufacturer: 'bmw' };
    const startAction: types.IApplyQueryAction = {
      type: actionTypes.APPLY_QUERY,
      data
    };
    const startAction2: types.IChangeQueryAction = {
      type: actionTypes.CHANGE_QUERY,
      data
    };
    expect(reducer(initialState, startAction)).toEqual({
      ...initialState,
      query: data
    });
    expect(reducer(initialState, startAction2)).toEqual({
      ...initialState,
      query: data
    });
  });
  it('should reset page on APPLY_QUERY/CHANGE_QUERY', () => {
    const data = { page: 25, sort: 'asc', color: 'red', manufacturer: 'bmw' };
    const startAction: types.IApplyQueryAction = {
      type: actionTypes.APPLY_QUERY,
      data
    };
    const startAction2: types.IChangeQueryAction = {
      type: actionTypes.CHANGE_QUERY,
      data
    };
    expect(reducer(initialState, startAction)).toEqual({
      ...initialState,
      query: {
        ...data,
        page: 1
      }
    });
    expect(reducer(initialState, startAction2)).toEqual({
      ...initialState,
      query: {
        ...data,
        page: 1
      }
    });
  });
  it('should update sort on CHANGE_SORT', () => {
    const startAction: types.IChangeSortAction = {
      type: actionTypes.CHANGE_SORT,
      value: 'des'
    };
    expect(reducer(initialState, startAction)).toEqual({
      ...initialState,
      query: {
        ...initialState.query,
        sort: 'des'
      }
    });
  });
  it('should update page on CHANGE_PAGE', () => {
    const startAction: types.IChangePageAction = {
      type: actionTypes.CHANGE_PAGE,
      value: 234
    };
    expect(reducer(initialState, startAction)).toEqual({
      ...initialState,
      query: {
        ...initialState.query,
        page: 234
      }
    });
  });
});
