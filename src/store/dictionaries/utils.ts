import capitalize from 'lodash/capitalize';

import { IManufacturer } from '../../services/api/model/manufacturer';
import { IDictionaryOption } from './types';

export const stringsConvertor = (values: string[]): IDictionaryOption[] =>
  values.map(value => ({ value, label: value }));

export const colorsConvertor = (values: string[]): IDictionaryOption[] =>
  [{ value: '', label: 'All Car Colors' }].concat(
    values.map(value => ({ value, label: capitalize(value) }))
  );

export const manufacturersConvertor = (
  values: IManufacturer[]
): IDictionaryOption[] =>
  [{ value: '', label: 'All Manufacturers' }].concat(
    values.map(({ name }) => ({ value: name, label: name }))
  );
