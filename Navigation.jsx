import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home, Login, Hotel } from './screens';

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
    <Tab.Navigator>
      <Tab.Screen
        name="Поиск"
        component={Stacks}
        options={{
          headerShown: false,
        }}
      ></Tab.Screen>
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
