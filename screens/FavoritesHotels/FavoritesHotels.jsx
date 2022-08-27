import React from 'react';
import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { HotelList } from '../../components/HotelList/HotelList';

export const FavoritesHotels = () => {
  const favoritesHotels = useSelector(
    (state) => state?.user?.favoritesHotels || []
  );
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#F4F4F4' }}>
      <FlatList
        style={{ width: '100%' }}
        data={favoritesHotels}
        renderItem={({ item }) => <HotelList key={item.hotelId} hotel={item} />}
      />
    </View>
  );
};
