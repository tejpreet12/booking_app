import React from 'react';
import { Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './RootStackParamList';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import BookingScreen from '../Screens/BookingScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import SavedScreen from '../Screens/SavedScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();

const TabNavigation = () =>{
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="BookingScreen" component={BookingScreen} />
            <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
            <Tab.Screen name="SavedScreen" component={SavedScreen} />
        </Tab.Navigator>
    )
}


const Navigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='TabNavigation' component={TabNavigation} />
    </Stack.Navigator>
  ) 
}

export default Navigation
