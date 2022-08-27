import { hotelsTypes } from '../../constants';

export const fetchHotelsRequest = (payload) => ({
  type: hotelsTypes.FETCH_HOTELS_REQUEST,
  payload,
});

export const fetchHotelsSuccess = (payload) => ({
  type: hotelsTypes.FETCH_HOTELS_SUCCESS,
  payload,
});

export const fetchHotelsFailure = (payload) => ({
  type: hotelsTypes.FETCH_HOTELS_FAILURE,
  payload,
});

export const hotelsReset = () => ({
  type: hotelsTypes.HOTELS_RESET,
});
