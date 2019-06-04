import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import List, { IInputProps } from '../views/layout/List';
import { fetchCarsAction } from '../store/cars/actions';
import {
  carsSelector,
  querySelector,
  isCarsLoadingSelector
} from '../store/cars/selectors';
import { IQuery } from '../store/cars/types';

import { IDispatch, IAppState } from '../store';

interface IOwnProps {
  query: IQuery;
}

type IStateProps = IInputProps & IOwnProps;

interface IDispatchProps {
  fetchCars: () => void;
}

type IProps = IStateProps & IDispatchProps;

const mapStateToProps = (state: IAppState): IStateProps => ({
  cars: carsSelector(state),
  query: querySelector(state),
  isCarsLoading: isCarsLoadingSelector(state)
});

const mapDispatchToProps = (dispatch: IDispatch): IDispatchProps => ({
  fetchCars: () => dispatch(fetchCarsAction())
});

const CarsContainer = ({ fetchCars, cars, query, isCarsLoading }: IProps) => {
  useEffect(() => {
    fetchCars();
  }, [fetchCars, query]);
  return <List cars={cars} isCarsLoading={isCarsLoading} />;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarsContainer);
