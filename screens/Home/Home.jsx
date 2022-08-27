import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StatusBar, ScrollView } from 'react-native';
import Search from '../../components/Search/Search';

export const Home = () => {
  const { navigate } = useNavigation();
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      keyboardShouldPersistTaps="handled"
    >
      <StatusBar barStyle="dark-content" />
      <Search navigate={navigate} />
    </ScrollView>
  );
};
