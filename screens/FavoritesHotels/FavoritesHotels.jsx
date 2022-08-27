import React from 'react';
import { View, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HotelList } from '../../components/HotelList/HotelList';
import { Select } from '../../components/UI';
import {
  filterByPrice,
  filterByStars,
} from '../../redux/actions/userAction/userAction';

export const FavoritesHotels = () => {
  const dispatch = useDispatch();

  const favoritesHotels = useSelector(
    (state) => state?.user?.favoritesHotels || []
  );
  const filter = useSelector((state) => state?.user?.appliedFilter || {});

  const selectClick = async (value) => {
    if (value === 'price') {
      dispatch(filterByPrice());
    } else {
      dispatch(filterByStars());
    }
  };
  return (
    <View style={{ alignItems: 'center', backgroundColor: '#F4F4F4' }}>
      <View
        style={{
          width: '100%',
          height: 70,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexDirection: 'row',
        }}
      >
        <Select
          onSelectClick={selectClick}
          filter={filter.stars.type}
          btnValue="stars"
        >
          Рейтинг
        </Select>
        <Select
          onSelectClick={selectClick}
          filter={filter.price.type}
          btnValue="price"
        >
          Цена
        </Select>
      </View>
      <FlatList
        style={{ width: '100%' }}
        data={favoritesHotels}
        renderItem={({ item }) => <HotelList key={item.hotelId} hotel={item} />}
      />
    </View>
  );
};
