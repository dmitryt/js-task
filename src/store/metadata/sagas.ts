import { takeLatest, select } from 'redux-saga/effects';

import * as actionTypes from './actionTypes';
import * as types from './types';
import { favouriteCarsSelector } from './selectors';
import { saveState } from '../../services/localStorage';

function* toggleFavouritesSaga({ stockNumber }: types.IToggleFavourites) {
  try {
    const favouriteCars = yield select(favouriteCarsSelector);
    saveState({ metadata: { favouriteCars } });
  } catch (e) {
    console.error('Errors with saving state to the localStorage');
  }
}

export default function* root() {
  yield takeLatest(actionTypes.TOGGLE_FAVOURITES, toggleFavouritesSaga);
}
