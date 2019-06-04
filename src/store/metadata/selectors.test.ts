import * as selectors from './selectors';
import { getState } from '../../test-utils';
import { IAppState } from '../index';

describe('metadata selectors', () => {
  let state: IAppState;
  beforeEach(() => {
    state = getState();
  });
  describe('select selector', () => {
    it('should return initial state', () => {
      expect(selectors.select(state)).toEqual({ favouriteCars: {} });
    });
  });
  describe('favouriteCarsSelector', () => {
    it('should return favourite cars ids correctly', () => {
      const favouriteCars = { '123': true, '234': true };
      const metadata = { favouriteCars };
      expect(selectors.favouriteCarsSelector({ ...state, metadata })).toEqual(
        favouriteCars
      );
    });
  });
  describe('isCarFavouriteSelector', () => {
    it('should return "true", if car is favourite', () => {
      const favouriteCars = { '123': true, '234': true };
      expect(
        selectors.isCarFavouriteSelector('234').resultFunc(favouriteCars)
      ).toBe(true);
    });
    it('should return "false", if car is not favourite', () => {
      const favouriteCars = { '123': true, '234': true };
      expect(
        selectors.isCarFavouriteSelector('567').resultFunc(favouriteCars)
      ).toBe(false);
    });
  });
});
