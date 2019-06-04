import * as actionTypes from './actionTypes';
import { IManufacturer } from '../../services/api/model/manufacturer';

export interface IDictionaryOption {
  label: string;
  value: string;
}

export interface IDictionary {
  name: string;
  isLoading: boolean;
  options?: IDictionaryOption[];
  error?: Error | null;
}

export type IDictionaryResponse = string[] | IManufacturer[];

export type IStoreState = {
  [name: string]: IDictionary;
};

export interface IFetchDictionaryRequest {
  type: typeof actionTypes.FETCH_DICTIONARY_REQUEST;
  name: string;
}

export interface IFetchDictionarySuccess {
  type: typeof actionTypes.FETCH_DICTIONARY_SUCCESS;
  name: string;
  data: IDictionaryResponse;
}

export interface IFetchDictionaryFailure {
  type: typeof actionTypes.FETCH_DICTIONARY_FAILURE;
  name: string;
  error: Error;
}

export type IAction =
  | IFetchDictionaryRequest
  | IFetchDictionarySuccess
  | IFetchDictionaryFailure;
