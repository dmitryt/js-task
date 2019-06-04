import reducer, { initialState } from './reducer';
import * as types from './types';
import * as actionTypes from './actionTypes';

describe('metadata reducer', () => {
  it('should return the initial state', () => {
    const action: any = {};
    expect(reducer(undefined, action)).toEqual(initialState);
  });
  it('should add car to favourites on TOGGLE_FAVOURITES', () => {
    const startAction: types.IToggleFavourites = {
      type: actionTypes.TOGGLE_FAVOURITES,
      stockNumber: '345'
    };
    const state = {
      ...initialState,
      favouriteCars: { '123': true, '234': true }
    };
    expect(reducer(state, startAction)).toEqual({
      ...initialState,
      favouriteCars: { '123': true, '234': true, '345': true }
    });
  });
  it('should remove car from favourites on TOGGLE_FAVOURITES', () => {
    const startAction: types.IToggleFavourites = {
      type: actionTypes.TOGGLE_FAVOURITES,
      stockNumber: '123'
    };
    const state = {
      ...initialState,
      favouriteCars: { '123': true, '234': true, '345': true }
    };
    expect(reducer(state, startAction)).toEqual({
      ...initialState,
      favouriteCars: { '123': false, '234': true, '345': true }
    });
  });
});
