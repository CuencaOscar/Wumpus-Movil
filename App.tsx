import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StatusBar } from 'react-native';
import GameScreen from './src/screens/GameScreen';
import PersonajesScreen from './src/screens/PersonajesScreen';
import StackNavigator from './src/navigator/StackNavigator';
import PortadaScreen from './src/screens/PortadaScreen';
import { SoundProvider } from './src/context/SoundContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <StackNavigator />
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({children}: any) => {
  return (
    <SoundProvider>
      {children}
    </SoundProvider>
  )
}

export default App;