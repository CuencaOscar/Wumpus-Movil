import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import GameScreen from '../screens/GameScreen';
import PersonajesScreen from '../screens/PersonajesScreen';
import PortadaScreen from '../screens/PortadaScreen';
import { SafeAreaView, StatusBar } from 'react-native';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <SafeAreaView style={{ flex: 1 }} >
      <StatusBar translucent hidden />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false
        }}>
        <Stack.Screen name="PortadaScreen" component={PortadaScreen} />
        <Stack.Screen name="PersonajesScreen" component={PersonajesScreen} />
        <Stack.Screen name="GameScreen" component={GameScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  );
}

export default StackNavigator;