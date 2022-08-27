import { getHotels } from './../../../utils/api';
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { hotelsTypes } from '../../constants';
import {
  fetchHotelsFailure,
  fetchHotelsSuccess,
} from '../../actions/hotelAction/hotelAction';

function* workerFetchHotels(action) {
  try {
    const { location, date, dateEnd, dayCount } = action.payload;
    console.log(date);
    console.log(dateEnd);
    const hotels = yield call(getHotels, location, date, dateEnd);
    console.log(hotels);
    yield put(
      fetchHotelsSuccess({
        hotels,
        date,
        dateEnd,
        location,
        dayCount,
      })
    );
  } catch (e) {
    yield put(
      fetchHotelsFailure({
        error: e.message,
      })
    );
  }
}

function* hotelsSaga() {
  yield all([takeEvery(hotelsTypes.FETCH_HOTELS_REQUEST, workerFetchHotels)]);
}

export default hotelsSaga;
