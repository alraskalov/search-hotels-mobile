import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { userLogout } from '../../redux/actions/userAction/userAction';
import { num_word } from '../../utils/utils';
import { hotelsReset } from '../../redux/actions/hotelAction/hotelAction';

const declension = ['отель', 'отеля', 'отелей'];

export const Profile = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const favoritesHotel = useSelector(
    (state) => state?.user?.favoritesHotels || []
  );
  const email = useSelector((state) => state?.user?.email || '');
  const countFavoritesHotel = favoritesHotel.length;
  const numWord = num_word(countFavoritesHotel, declension);

  const onClickLogout = () => {
    dispatch(userLogout());
    dispatch(hotelsReset());
    navigate('Авторизация');
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ marginBottom: 20 }}>E-mail: {email}</Text>
      <Text style={{ marginBottom: 20 }}>
        Добавлено в Избранное: {countFavoritesHotel} {numWord}
      </Text>
      <Button onPress={onClickLogout} title="Выйти" />
    </View>
  );
};
