import qs from 'query-string';

import { ICar } from '../../services/api/model/car';
import { IQuery } from './types';
import { initialQuery } from './reducer';

export const prepareDescription = (car: ICar | null): string | null => {
  if (!car) {
    return null;
  }
  const { stockNumber, fuelType, color, mileage } = car;
  return `Stock # ${stockNumber} - ${mileage.number} ${
    mileage.unit
  } - ${fuelType} - ${color}`;
};

export const parseQueryFromUrl = (str: string): IQuery => {
  const obj = qs.parse(str);
  const result = Object.keys(initialQuery).reduce(
    (acc, key) =>
      typeof obj[key] === 'string' ? { ...acc, [key]: obj[key] } : acc,
    initialQuery
  );
  if (typeof result.page === 'string') {
    result.page = isNaN(result.page) ? 1 : parseInt(result.page, 10);
  }
  return result;
};

export const getResultsNumber = (
  page: number,
  itemsPerPage: number,
  total: number
) => (page * itemsPerPage > total ? total : page * itemsPerPage);
