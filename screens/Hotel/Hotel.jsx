import React from 'react';
import { FlatList, View } from 'react-native';
import { HotelList } from '../../components/HotelList/HotelList';
import { useSelector } from 'react-redux';
export const Hotel = () => {
  const hotels = useSelector((state) => state?.hotel?.hotels || []);

  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#F4F4F4' }}>
      <FlatList
        style={{ width: '100%' }}
        data={hotels}
        renderItem={({ item }) => <HotelList key={item.hotelId} hotel={item} />}
      />
    </View>
  );
};
