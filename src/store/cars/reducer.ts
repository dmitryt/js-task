import { IStoreState, IAction } from './types';
import * as actionTypes from './actionTypes';

export const initialQuery = {
  page: 1,
  sort: '',
  color: '',
  manufacturer: ''
};

export const initialState: IStoreState = {
  isLoading: false,
  carsIds: [],
  total: 0,
  pages: 0,
  itemsPerPage: 10,
  storage: {},
  loadingError: null,
  query: initialQuery
};

export default function carsReducer(
  state: IStoreState = initialState,
  action: IAction
): IStoreState {
  switch (action.type) {
    case actionTypes.FETCH_CARS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.FETCH_CARS_SUCCESS:
      return {
        ...state,
        loadingError: null,
        isLoading: false,
        carsIds: action.data.cars.map(({ stockNumber }) => stockNumber),
        storage: action.data.cars.reduce(
          (acc, car) => ({
            ...acc,
            [car.stockNumber]: car
          }),
          {}
        ),
        pages: action.data.totalPageCount,
        total: action.data.totalCarsCount
      };
    case actionTypes.FETCH_CARS_FAILURE:
      return {
        ...state,
        isLoading: false,
        loadingError: action.error
      };
    case actionTypes.FETCH_CAR_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case actionTypes.FETCH_CAR_SUCCESS:
      return {
        ...state,
        loadingError: null,
        isLoading: false,
        carsIds: [...state.carsIds, action.data.stockNumber],
        storage: {
          ...state.storage,
          [action.data.stockNumber]: action.data
        }
      };
    case actionTypes.FETCH_CAR_FAILURE:
      return {
        ...state,
        isLoading: false,
        loadingError: action.error
      };
    case actionTypes.APPLY_QUERY:
    case actionTypes.CHANGE_QUERY:
      return {
        ...state,
        query: {
          ...action.data,
          page: 1
        }
      };
    case actionTypes.CHANGE_SORT:
      return {
        ...state,
        query: {
          ...state.query,
          sort: action.value
        }
      };
    case actionTypes.CHANGE_PAGE:
      return {
        ...state,
        query: {
          ...state.query,
          page: action.value
        }
      };
    default:
      return state;
  }
}
