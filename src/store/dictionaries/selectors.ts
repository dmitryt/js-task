import { IDictionary, IStoreState } from './types';
import { IAppState } from '../index';

const emptyDictionary: IDictionary = {
  name: '',
  error: null,
  isLoading: false,
  options: []
};

export const select = (store: IAppState): IStoreState => store.dictionaries;

export const dictionarySelector = (name: string) => (
  state: IAppState
): IDictionary => ({ ...emptyDictionary, ...select(state)[name] });

export const hasDictionarySelector = (name: string) => (
  state: IAppState
): boolean => {
  const dictionary = select(state)[name];
  return !!(dictionary && dictionary.options);
};
