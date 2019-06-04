import { takeEvery, put, select, call } from 'redux-saga/effects';

import * as actionTypes from './actionTypes';
import * as actions from './actions';
import * as types from './types';
import { hasDictionarySelector } from './selectors';
import { fetchDictionary } from '../../services/api';

function* fetchDictionarySaga({ name }: types.IFetchDictionaryRequest) {
  try {
    const hasDictionary = yield select(hasDictionarySelector(name));
    if (!hasDictionary) {
      const data = yield call(fetchDictionary, name);
      yield put(actions.fetchDictionarySuccessAction(name, data));
    }
  } catch (e) {
    yield put(actions.fetchDictionaryFailureAction(name, e));
  }
}

export default function* root() {
  yield takeEvery(actionTypes.FETCH_DICTIONARY_REQUEST, fetchDictionarySaga);
}
