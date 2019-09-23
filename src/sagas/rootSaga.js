import {all} from 'redux-saga/effects';
import {watchDogRequests} from '../sagas/dogRequests';

export default function* rootSaga() {
  yield all([watchDogRequests()]);
}
