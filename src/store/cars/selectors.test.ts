import * as selectors from './selectors';
import { getState } from '../../test-utils';
import { IAppState } from '../index';

import mockCars from '../../services/api/mocks/car';

describe('cars selectors', () => {
  let state: IAppState;
  beforeEach(() => {
    state = getState();
  });
  describe('select selector', () => {
    it('should return initial state', () => {
      expect(selectors.select(state)).toEqual(state.cars);
    });
  });
  describe('querySelector', () => {
    it('should return query', () => {
      const query = { page: 2, color: 'red', manufacturer: 'bmw', sort: 'asc' };
      const cars = { ...state.cars, query };
      expect(selectors.querySelector(state)).toEqual({
        page: 1,
        color: '',
        manufacturer: '',
        sort: ''
      });
      expect(selectors.querySelector({ ...state, cars })).toEqual(query);
    });
  });
  describe('isCarsLoadingSelector', () => {
    it('should return "true", if cars are loading', () => {
      const cars = { ...state.cars, isLoading: true };
      expect(selectors.isCarsLoadingSelector({ ...state, cars })).toBe(true);
    });
    it('should return "false", if cars are not loading', () => {
      const cars = { ...state.cars, isLoading: false };
      expect(selectors.isCarsLoadingSelector({ ...state, cars })).toBe(false);
    });
  });
  describe('pagesSelector', () => {
    it('should return pages correctly', () => {
      const cars = { ...state.cars, pages: 123 };
      expect(selectors.pagesSelector(state)).toBe(0);
      expect(selectors.pagesSelector({ ...state, cars })).toBe(123);
    });
  });
  describe('totalSelector', () => {
    it('should return total correctly', () => {
      const cars = { ...state.cars, total: 567 };
      expect(selectors.totalSelector(state)).toBe(0);
      expect(selectors.totalSelector({ ...state, cars })).toBe(567);
    });
  });
  describe('carsStorageSelector', () => {
    it('should return cars storage correctly', () => {
      const storage = { 123: mockCars[0], 234: mockCars[1] };
      const cars = { ...state.cars, storage };
      expect(selectors.carsStorageSelector(state)).toEqual({});
      expect(selectors.carsStorageSelector({ ...state, cars })).toEqual(
        storage
      );
    });
  });
  describe('carsIdsSelector', () => {
    it('should return cars ids correctly', () => {
      const cars = { ...state.cars, carsIds: [123, 234] };
      expect(selectors.carsIdsSelector(state)).toEqual([]);
      expect(selectors.carsIdsSelector({ ...state, cars })).toEqual([123, 234]);
    });
  });
  describe('itemsPerPageSelector', () => {
    it('should return items per page correctly', () => {
      const itemsPerPage = 235;
      const cars = { ...state.cars, itemsPerPage };
      expect(selectors.itemsPerPageSelector(state)).toEqual(10);
      expect(selectors.itemsPerPageSelector({ ...state, cars })).toEqual(235);
    });
  });
  describe('sortSelector', () => {
    it('should return sort correctly', () => {
      const query1 = {
        page: 2,
        color: 'red',
        manufacturer: 'bmw',
        sort: 'asc'
      };
      const query2 = { page: 2, color: 'red', manufacturer: 'bmw', sort: '' };
      expect(selectors.sortSelector.resultFunc(query1)).toBe('asc');
      expect(selectors.sortSelector.resultFunc(query2)).toBe('');
    });
  });
  describe('pageSelector', () => {
    it('should return page correctly', () => {
      const query1 = {
        page: 1,
        color: 'red',
        manufacturer: 'bmw',
        sort: 'asc'
      };
      const query2 = { page: 235, color: 'red', manufacturer: 'bmw', sort: '' };
      expect(selectors.pageSelector.resultFunc(query1)).toBe(1);
      expect(selectors.pageSelector.resultFunc(query2)).toBe(235);
    });
  });
  describe('carsSelector', () => {
    it('should return cars correctly', () => {
      const ids = [mockCars[0].stockNumber, mockCars[2].stockNumber];
      const storage = {
        [mockCars[0].stockNumber]: mockCars[0],
        [mockCars[1].stockNumber]: mockCars[1],
        [mockCars[2].stockNumber]: mockCars[2]
      };
      const favourites = {};
      const expected = [mockCars[0], mockCars[2]];
      expect(
        selectors.carsSelector.resultFunc(ids, storage, favourites)
      ).toEqual(expected);
    });
    it('should return favourites cars at first', () => {
      const ids = [
        mockCars[0].stockNumber,
        mockCars[1].stockNumber,
        mockCars[2].stockNumber
      ];
      const storage = {
        [mockCars[0].stockNumber]: mockCars[0],
        [mockCars[1].stockNumber]: mockCars[1],
        [mockCars[2].stockNumber]: mockCars[2]
      };
      const favourites = { '73': true };
      const expected = [mockCars[2], mockCars[0], mockCars[1]];
      expect(
        selectors.carsSelector.resultFunc(ids, storage, favourites)
      ).toEqual(expected);
    });
  });
  describe('carsSelector', () => {
    it('should return car correctly', () => {
      const storage = {
        [mockCars[0].stockNumber]: mockCars[0],
        [mockCars[1].stockNumber]: mockCars[1],
        [mockCars[2].stockNumber]: mockCars[2]
      };
      expect(
        selectors
          .carSelector(String(mockCars[1].stockNumber))
          .resultFunc(storage)
      ).toEqual(mockCars[1]);
    });
  });
});
