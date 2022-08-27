import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home, FavoritesHotels, Hotel, Login, Profile } from './screens';

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

const Stacks = () => {
  return (
    <HomeStack.Navigator initialRouteName="Search">
      <HomeStack.Screen
        name="Search"
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
    <Tab.Navigator initialRouteName="Авторизация">
      <Tab.Screen
        name="Поиск"
        component={Stacks}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="text-box-search-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Избранное"
        component={FavoritesHotels}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons name="star" size={size} color={color} />
            );
          },
        }}
      />
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
      <Tab.Screen
        name="Профиль"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="account"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
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
