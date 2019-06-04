import { cloneableGenerator } from 'redux-saga/utils';
import { put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { fetchCar } from '../../services/api';
import * as actions from './actions';
import * as sagas from './sagas';

import mockCars from '../../services/api/mocks/car';

describe('cars sagas', () => {
  describe('carSaga', () => {
    const carId = '123';
    const gen = cloneableGenerator(sagas.fetchCarSaga)(
      actions.fetchCarAction(carId)
    );
    gen.next();
    it('should fetch car', () => {
      const clone = gen.clone();
      expect(clone.next().value).toEqual(call(fetchCar, carId));
    });
    it('should dispatch fetchCarSuccessAction', () => {
      const clone = gen.clone();
      clone.next();
      const response = mockCars[0];
      expect(clone.next(response).value).toEqual(
        put(actions.fetchCarSuccessAction(response))
      );
    });
    it('should redirect to 404, when car is not found', () => {
      const clone = gen.clone();
      const response = { status: 404 };
      const error = { ...new Error('some error'), response };
      expect(clone.throw(error).value).toEqual(
        put(actions.fetchCarFailureAction(error))
      );
      expect(clone.next().value).toEqual(put(push('/not-found')));
    });
  });
  describe('updateQuerySaga', () => {
    const query = { page: 25, color: 'red', manufacturer: 'bmw', sort: 'des' };
    const gen = cloneableGenerator(sagas.updateQuerySaga)();
    gen.next();
    const expectedUrl = {
      search: '?color=red&manufacturer=bmw&page=25&sort=des'
    };
    expect(gen.next(query).value).toEqual(put(push(expectedUrl)));
  });
});
