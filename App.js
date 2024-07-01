import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import home from './components/home';
import about from './components/about';
import FriendList from './components/FriendList';
import FriendDetail from './components/FriendDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={home} />
        <Stack.Screen name="about" component={about} />
        <Stack.Screen name="FriendList" component={FriendList} />
        <Stack.Screen name="FriendDetail" component={FriendDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

