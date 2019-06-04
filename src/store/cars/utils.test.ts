import { parseQueryFromUrl } from './utils';

describe('cars utils', () => {
  describe('parseQueryFromUrl', () => {
    it('should return inital state from empty query', () => {
      const str = '?';
      const state = { color: '', manufacturer: '', page: 1, sort: '' };
      expect(parseQueryFromUrl(str)).toEqual(state);
    });
    it('should parse color from query correctly', () => {
      const str = '?color=red';
      const state = { color: 'red', manufacturer: '', page: 1, sort: '' };
      expect(parseQueryFromUrl(str)).toEqual(state);
    });
    it('should parse manufacturer from query correctly', () => {
      const str = '?manufacturer=bmw';
      const state = { color: '', manufacturer: 'bmw', page: 1, sort: '' };
      expect(parseQueryFromUrl(str)).toEqual(state);
    });
    it('should parse page from query correctly', () => {
      const str = '?page=25';
      const state = { color: '', manufacturer: '', page: 25, sort: '' };
      expect(parseQueryFromUrl(str)).toEqual(state);
    });
    it('should parse sort from query correctly', () => {
      const str = '?sort=asc';
      const state = { color: '', manufacturer: '', page: 1, sort: 'asc' };
      expect(parseQueryFromUrl(str)).toEqual(state);
    });
    it('should parse complex query correctly', () => {
      const str = '?color=red&manufacturer=bmw&page=25&sort=asc';
      const state = {
        color: 'red',
        manufacturer: 'bmw',
        page: 25,
        sort: 'asc'
      };
      expect(parseQueryFromUrl(str)).toEqual(state);
    });
  });
});
