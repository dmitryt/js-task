import { takeLatest, call, put, select, all } from 'redux-saga/effects';
import { push, LOCATION_CHANGE } from 'connected-react-router';
import get from 'lodash/get';
import isEqual from 'lodash/isEqual';
import qs from 'query-string';

import * as actionTypes from './actionTypes';
import * as types from './types';
import * as actions from './actions';
import { routerSelector } from '../selectors';
import { parseQueryFromUrl } from './utils';
import { querySelector, carSelector, carsSelector } from './selectors';
import { fetchCars, fetchCar } from '../../services/api';

function* fetchCarsSaga() {
  try {
    const query = yield select(querySelector);
    const existingData = yield select(carsSelector);
    const { data } = yield all({
      data: call(fetchCars, query),
      // emulating network latency
      timeout:
        existingData.length === 0
          ? null
          : new Promise(resolve => setTimeout(resolve, 1000))
    });
    yield put(actions.fetchCarsSuccessAction(data));
  } catch (e) {
    yield put(actions.fetchCarsFailureAction(e));
  }
}

export function* fetchCarSaga({ stockNumber }: types.IFetchCarRequestAction) {
  try {
    const car = yield select(carSelector(stockNumber));
    if (!car) {
      const data = yield call(fetchCar, stockNumber);
      yield put(actions.fetchCarSuccessAction(data));
    }
  } catch (e) {
    const statusCode = get(e, 'response.status');
    yield put(actions.fetchCarFailureAction(e));
    if (statusCode === 404) {
      yield put(push('/not-found'));
    }
  }
}

export function* updateQuerySaga() {
  try {
    const query = yield select(querySelector);
    const search = `?${qs.stringify(query)}`;
    yield put(push({ search }));
  } catch (e) {
    console.error('Cannot update URL');
  }
}

function* applyQueryParamsToStore() {
  try {
    const { location } = yield select(routerSelector);
    const state = yield select(querySelector);
    const urlState = parseQueryFromUrl(location.search);
    // when user changes data manually
    if (!isEqual(state, urlState)) {
      yield put(actions.applyQueryAction(urlState));
    }
  } catch (e) {
    console.error('Cannot update URL');
  }
}

export default function* root() {
  yield takeLatest(actionTypes.FETCH_CARS_REQUEST, fetchCarsSaga);
  yield takeLatest(actionTypes.FETCH_CAR_REQUEST, fetchCarSaga);
  yield takeLatest(actionTypes.CHANGE_QUERY, updateQuerySaga);
  yield takeLatest(actionTypes.CHANGE_PAGE, updateQuerySaga);
  yield takeLatest(actionTypes.CHANGE_SORT, updateQuerySaga);
  yield takeLatest(LOCATION_CHANGE, applyQueryParamsToStore);
}
