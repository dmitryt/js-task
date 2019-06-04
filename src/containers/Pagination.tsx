import React from 'react';
import { connect } from 'react-redux';

import Pagination, {
  IInputProps,
  IOutputProps
} from '../components/Pagination';
import { changePageAction } from '../store/cars/actions';
import { pageSelector, pagesSelector } from '../store/cars/selectors';

import { IDispatch, IAppState } from '../store';

type IStateProps = IInputProps;
type IDispatchProps = IOutputProps;

type IProps = IStateProps & IDispatchProps;

const mapStateToProps = (state: IAppState): IStateProps => ({
  currentPage: pageSelector(state),
  totalPages: pagesSelector(state)
});

const mapDispatchToProps = (dispatch: IDispatch): IDispatchProps => ({
  onChange: (page: number) => dispatch(changePageAction(page))
});

const CarsContainer = ({ currentPage, totalPages, onChange }: IProps) => (
  <Pagination
    currentPage={currentPage}
    totalPages={totalPages}
    onChange={onChange}
  />
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarsContainer);
