import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { HotelList } from '../../components/HotelList/HotelList';
import { useSelector } from 'react-redux';
export const Hotel = () => {
  const hotels = useSelector((state) => state?.hotel?.hotels || []);
  const { pending, error } = useSelector((state) => state?.hotel);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F4F4F4',
        justifyContent: 'center',
      }}
    >
      {error && <Text>Ничего не найдено</Text>}
      {pending && <Text>Идет загрузка</Text>}
      {hotels.length != 0 && (
        <FlatList
          style={{ width: '100%' }}
          data={hotels}
          renderItem={({ item }) => (
            <HotelList key={item.hotelId} hotel={item} />
          )}
        />
      )}
    </View>
  );
};
