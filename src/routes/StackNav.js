import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import About from '../screens/About';
import MenuItems from '../screens/MenuItems';
import splash from '../screens/splash';
import WelcomeBack from '../screens/WelcomeBack';
import Confirmation from '../screens/Confirmation';
import AddProfile from '../screens/AddProfile';
import MainScreen from '../screens/MainScreen';


const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="AddProfile" component={AddProfile} options={{ headerShown: false }}/>
        <Stack.Screen name="Confirmation" component={Confirmation} options={{ headerShown: false }}/>
        <Stack.Screen name="splash" component={splash} options={{ headerShown: false }}/>
        <Stack.Screen name="WelcomeBack" component={WelcomeBack} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="About" component={About} options={{ headerShown: false }}/>
        <Stack.Screen name="MenuItems" component={MenuItems} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNav;
