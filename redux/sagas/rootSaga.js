import { all, fork } from 'redux-saga/effects';
import hotelSaga from './hotelSaga/hotelSaga';

export default function* rootSaga() {
  yield all([fork(hotelSaga)]);
}
