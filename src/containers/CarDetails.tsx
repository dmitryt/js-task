import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';

import CarDetails, { IInputProps } from '../views/layout/CarDetails';
import { fetchCarAction } from '../store/cars/actions';
import { toggleFavouritesAction } from '../store/metadata/actions';
import { carSelector } from '../store/cars/selectors';
import { isCarFavouriteSelector } from '../store/metadata/selectors';

import { IDispatch, IAppState } from '../store';

type IStateProps = IInputProps;

interface IDispatchProps {
  fetchCar: (s: string) => void;
  toggleFavourite: (s: string) => void;
}

interface IOwnProps {
  stockNumber: string;
}

type IProps = IStateProps & IDispatchProps & IOwnProps;

const mapStateToProps = (
  state: IAppState,
  { stockNumber }: IOwnProps
): IStateProps => ({
  car: carSelector(stockNumber)(state),
  isCarFavourite: isCarFavouriteSelector(stockNumber)(state)
});

const mapDispatchToProps = (dispatch: IDispatch): IDispatchProps => ({
  fetchCar: (stockNumber: string) => dispatch(fetchCarAction(stockNumber)),
  toggleFavourite: (stockNumber: string) =>
    dispatch(toggleFavouritesAction(stockNumber))
});

const CarDetailsContainer = ({
  fetchCar,
  car,
  stockNumber,
  isCarFavourite,
  toggleFavourite
}: IProps) => {
  useEffect(() => {
    fetchCar(stockNumber);
  }, [fetchCar, stockNumber]);
  const onToggleFavourite = useCallback(() => {
    toggleFavourite(stockNumber);
  }, [toggleFavourite, stockNumber]);
  return (
    <CarDetails
      car={car}
      isCarFavourite={isCarFavourite}
      onToggleFavourite={onToggleFavourite}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarDetailsContainer);
