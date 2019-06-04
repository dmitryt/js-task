import * as selectors from './selectors';
import { getState } from '../../test-utils';
import { IAppState } from '../index';

describe('dictionaries selectors', () => {
  let state: IAppState;
  beforeEach(() => {
    state = getState();
  });
  describe('select selector', () => {
    it('should return initial state', () => {
      expect(selectors.select(state)).toEqual({});
    });
  });
  describe('dictionarySelector', () => {
    it('should return query', () => {
      const colors = {
        name: 'colors',
        error: null,
        isLoading: false,
        options: [{ label: 'red', value: 'red' }]
      };
      const dictionaries = { colors };
      expect(
        selectors.dictionarySelector('colors')({ ...state, dictionaries })
      ).toEqual(colors);
    });
  });
  describe('hasDictionarySelector', () => {
    it('should return true, if dictionary is in the store', () => {
      const colors = {
        name: 'colors',
        error: null,
        isLoading: false,
        options: [{ label: 'red', value: 'red' }]
      };
      const dictionaries = { colors };
      expect(
        selectors.hasDictionarySelector('colors')({ ...state, dictionaries })
      ).toBe(true);
    });
    it('should return false, if dictionary is not in the store', () => {
      const colors = {
        name: 'colors',
        error: null,
        isLoading: false,
        options: [{ label: 'red', value: 'red' }]
      };
      const dictionaries = { colors };
      expect(
        selectors.hasDictionarySelector('other')({ ...state, dictionaries })
      ).toBe(false);
    });
  });
});
