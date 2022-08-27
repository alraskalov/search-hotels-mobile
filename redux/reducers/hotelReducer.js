import { hotelsTypes } from '../constants';

const initialState = {
  pending: false,
  hotels: [],
  location: null,
  dateStart: new Date(),
  error: null,
};

const hotelReducer = (state = initialState, action) => {
  const hotels = [];

  switch (action.type) {
    case hotelsTypes.FETCH_HOTELS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case hotelsTypes.FETCH_HOTELS_SUCCESS:
      for (const value of action.payload.hotels) {
        hotels.push({
          hotelId: value.hotelId,
          hotelName: value.hotelName,
          priceAvg: value.priceAvg,
          stars: value.stars,
          dateStart: action.payload.date,
          dateEnd: action.payload.dateEnd,
          dayCount: action.payload.dayCount,
        });
      }
      return {
        ...state,
        pending: false,
        hotels,
        location: action.payload.location,
        dateStart: action.payload.date,
        error: null,
      };
    case hotelsTypes.FETCH_HOTELS_FAILURE:
      return {
        ...state,
        pending: false,
        hotels: [],
        location: null,
        dateStart: '',
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default hotelReducer;
