import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home, FavoritesHotels, Hotel, Login, Profile } from './screens';

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

const Stacks = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Список отелей"
        component={Hotel}
        options={{
          headerBackTitleVisible: false,
          headerShadowVisible: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName="Поиск">
      <Tab.Screen
        name="Поиск"
        component={Stacks}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen name="Избранное" component={FavoritesHotels} />
      <Tab.Screen
        name="Авторизация"
        component={Login}
        options={{
          headerShown: false,
          tabBarStyle: {
            display: 'none',
          },
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen name="Профиль" component={Profile} />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

export default Navigation;
