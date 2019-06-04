import reducer, { initialState } from './reducer';
import * as types from './types';
import * as actionTypes from './actionTypes';

describe('dictionaries reducer', () => {
  it('should return the initial state', () => {
    const action: any = {};
    expect(reducer(undefined, action)).toEqual(initialState);
  });
  it('should set isLoading true on FETCH_DICTIONARY_REQUEST', () => {
    const startAction: types.IFetchDictionaryRequest = {
      type: actionTypes.FETCH_DICTIONARY_REQUEST,
      name: 'test'
    };
    expect(reducer(initialState, startAction)).toEqual({
      ...initialState,
      test: {
        name: 'test',
        isLoading: true
      }
    });
  });
  it('should update state correctly on FETCH_DICTIONARY_SUCCESS', () => {
    const data = ['value1', 'value2', 'value3'];
    const startAction: types.IFetchDictionarySuccess = {
      type: actionTypes.FETCH_DICTIONARY_SUCCESS,
      name: 'test',
      data
    };
    const state = {
      ...initialState,
      test: {
        name: 'test',
        isLoading: true
      }
    };
    expect(reducer(state, startAction)).toEqual({
      ...initialState,
      test: {
        name: 'test',
        isLoading: false,
        error: null,
        options: [
          { label: 'value1', value: 'value1' },
          { label: 'value2', value: 'value2' },
          { label: 'value3', value: 'value3' }
        ]
      }
    });
  });
  it('should isLoading to false and handling an error on FETCH_DICTIONARY_FAILURE', () => {
    const error: Error = new Error('some error occurs');
    const startAction: types.IFetchDictionaryFailure = {
      type: actionTypes.FETCH_DICTIONARY_FAILURE,
      name: 'test',
      error
    };
    const state = {
      ...initialState,
      test: {
        name: 'test',
        isLoading: true
      }
    };
    expect(reducer(state, startAction)).toEqual({
      ...initialState,
      test: {
        name: 'test',
        isLoading: false,
        error
      }
    });
  });
});
