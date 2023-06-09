import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';

const BottomNavigation = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen}/>
    </Tab.Navigator>
  )
}

export default BottomNavigation