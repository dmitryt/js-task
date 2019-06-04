import React from 'react';
import { connect } from 'react-redux';

import ListHeader, { IInputProps } from '../views/layout/ListHeader';
import { changeSortAction } from '../store/cars/actions';
import {
  sortSelector,
  pageSelector,
  totalSelector,
  itemsPerPageSelector
} from '../store/cars/selectors';

import { IDispatch, IAppState } from '../store';

type IStateProps = IInputProps;

interface IDispatchProps {
  changeSort: (s: string) => void;
}

interface IProps extends IStateProps, IDispatchProps {}

const mapStateToProps = (state: IAppState): IStateProps => ({
  sort: sortSelector(state),
  page: pageSelector(state),
  total: totalSelector(state),
  itemsPerPage: itemsPerPageSelector(state)
});

const mapDispatchToProps = (dispatch: IDispatch): IDispatchProps => ({
  changeSort: (sort: string) => dispatch(changeSortAction(sort))
});

const ListHeaderContainer = ({
  sort,
  changeSort,
  page,
  total,
  itemsPerPage
}: IProps) => {
  return (
    <ListHeader
      sort={sort}
      page={page}
      onSortChange={changeSort}
      total={total}
      itemsPerPage={itemsPerPage}
    />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListHeaderContainer);
