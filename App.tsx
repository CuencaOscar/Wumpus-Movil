import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigator/StackNavigator';
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