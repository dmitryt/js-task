import { IStoreState, IAction } from './types';
import * as actionTypes from './actionTypes';

export const initialState: IStoreState = {
  favouriteCars: {}
};

export default function carsReducer(
  state: IStoreState = initialState,
  action: IAction
) {
  switch (action.type) {
    case actionTypes.TOGGLE_FAVOURITES:
      return {
        ...state,
        favouriteCars: {
          ...state.favouriteCars,
          [action.stockNumber]: !state.favouriteCars[action.stockNumber]
        }
      };
    default:
      return state;
  }
}
