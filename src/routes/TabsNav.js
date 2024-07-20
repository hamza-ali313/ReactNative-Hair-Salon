import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/Home';
import About from '../screens/About';
import MenuItems from '../screens/MenuItems';
import GetStarted from '../screens/splash';

const Tab = createBottomTabNavigator();

const TabsNav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'About') {
              iconName = focused ? 'information' : 'information-outline';
            } else if (route.name === 'Menu') {
              iconName = focused ? 'format-list-bulleted' : 'view-list';
            }

            return <Icon name={iconName} size={25} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: {
            fontSize: 25,
          },
        })}>
        <Tab.Screen name="GetStarted" component={GetStarted} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Menu" component={MenuItems} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabsNav;
