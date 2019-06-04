import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import NavFilter, { IInputProps } from '../views/layout/NavFilter';
import { fetchDictionaryAction } from '../store/dictionaries/actions';
import { dictionarySelector } from '../store/dictionaries/selectors';
import { querySelector } from '../store/cars/selectors';
import { changeQueryAction } from '../store/cars/actions';
import { IQuery } from '../store/cars/types';

import { IDispatch, IAppState } from '../store';

type IStateProps = IInputProps;

type IDispatchProps = {
  fetchDictionary: (name: string) => void;
  changeFilters: (data: IQuery) => void;
};

type IProps = IStateProps & IDispatchProps;

const MANUFACTURERS_DICTIONARY = 'manufacturers';
const COLORS_DICTIONARY = 'colors';

const mapStateToProps = (state: IAppState): IStateProps => ({
  manufacturers: dictionarySelector(MANUFACTURERS_DICTIONARY)(state),
  colors: dictionarySelector(COLORS_DICTIONARY)(state),
  query: querySelector(state)
});

const mapDispatchToProps = (dispatch: IDispatch): IDispatchProps => ({
  fetchDictionary: (name: string) => dispatch(fetchDictionaryAction(name)),
  changeFilters: (data: IQuery) => dispatch(changeQueryAction(data))
});

const CarsContainer = ({
  fetchDictionary,
  colors,
  query,
  manufacturers,
  changeFilters
}: IProps) => {
  useEffect(() => {
    fetchDictionary(COLORS_DICTIONARY);
    fetchDictionary(MANUFACTURERS_DICTIONARY);
  }, [fetchDictionary]);
  return (
    <NavFilter
      colors={colors}
      manufacturers={manufacturers}
      query={query}
      onSubmit={changeFilters}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarsContainer);
