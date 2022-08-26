import React from 'react';
import { StatusBar, Text, View } from 'react-native';

export const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar barStyle='dark-content' />
      <Text>Home</Text>
    </View>
  );
};
