import * as actionTypes from './actionTypes';
import * as types from './types';

export const fetchDictionaryAction = (
  name: string
): types.IFetchDictionaryRequest => ({
  type: actionTypes.FETCH_DICTIONARY_REQUEST,
  name
});

export const fetchDictionarySuccessAction = (
  name: string,
  data: types.IDictionaryResponse
): types.IFetchDictionarySuccess => ({
  type: actionTypes.FETCH_DICTIONARY_SUCCESS,
  name,
  data
});

export const fetchDictionaryFailureAction = (
  name: string,
  error: Error
): types.IFetchDictionaryFailure => ({
  type: actionTypes.FETCH_DICTIONARY_FAILURE,
  name,
  error
});
