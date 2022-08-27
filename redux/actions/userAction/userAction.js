import { userTypes } from '../../constants';

export const setFavoriteHotel = (payload) => ({
  type: userTypes.SET_FAVORITE_HOTELS,
  payload,
});

export const unsetFavoriteHotel = (payload) => ({
  type: userTypes.UNSET_FAVORITE_HOTELS,
  payload,
});

export const setUser = (payload) => ({
  type: userTypes.SET_USER,
  payload,
});

export const filterByStars = () => ({
  type: userTypes.FILTER_BY_STARS,
});

export const filterByPrice = () => ({
  type: userTypes.FILTER_BY_PRICE,
});

export const resetFilter = () => ({
  type: userTypes.RESET_FILTER,
});
