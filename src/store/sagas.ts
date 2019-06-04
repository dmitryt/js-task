import { all } from 'redux-saga/effects';

import carsSaga from './cars/sagas';
import dictionariesSaga from './dictionaries/sagas';
import metadataSaga from './metadata/sagas';

export default function* rootSaga() {
  yield all([carsSaga(), dictionariesSaga(), metadataSaga()]);
}
