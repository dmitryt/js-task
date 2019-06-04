import { IStoreState, IAction, IDictionaryOption } from './types';
import * as actionTypes from './actionTypes';

import {
  colorsConvertor,
  manufacturersConvertor,
  stringsConvertor
} from './utils';
import { IManufacturer } from '../../services/api/model/manufacturer';

interface IConvertor {
  [name: string]: (v: string[] | IManufacturer[]) => IDictionaryOption[];
}
const convertors: IConvertor = {
  colors: colorsConvertor,
  manufacturers: manufacturersConvertor
};

export const initialState: IStoreState = {};

export default function carsReducer(
  state: IStoreState = initialState,
  action: IAction
) {
  switch (action.type) {
    case actionTypes.FETCH_DICTIONARY_REQUEST:
      return {
        ...state,
        [action.name]: {
          name: action.name,
          isLoading: true
        }
      };
    case actionTypes.FETCH_DICTIONARY_SUCCESS:
      return {
        ...state,
        [action.name]: {
          name: action.name,
          isLoading: false,
          options: (convertors[action.name] || stringsConvertor)(action.data),
          error: null
        }
      };
    case actionTypes.FETCH_DICTIONARY_FAILURE:
      return {
        ...state,
        [action.name]: {
          name: action.name,
          isLoading: false,
          error: action.error
        }
      };
    default:
      return state;
  }
}
