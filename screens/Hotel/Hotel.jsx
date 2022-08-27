import React from 'react';
import { FlatList, View } from 'react-native';
import { HotelList } from '../../components/HotelList/HotelList';

export const Hotel = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <FlatList
        style={{ width: '100%' }}
        data={[...Array(5)]}
        renderItem={() => <HotelList />}
      />
    </View>
  );
};
