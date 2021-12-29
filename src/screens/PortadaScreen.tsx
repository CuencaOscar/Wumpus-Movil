import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext } from 'react'
import { ImageBackground, View } from 'react-native';
import {
  hideNavigationBar,
} from 'react-native-navigation-bar-color';
import CardPortada from '../components/CardPortada';

interface Props extends StackScreenProps<any, any> { }

const PortadaScreen = ({ navigation }: Props) => {

  hideNavigationBar();

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        resizeMode='cover'
        style={{
          flex: 1
        }}
        source={require('./../../images/MarioPortada.jpg')}
      >
        <CardPortada navigation={() => navigation.navigate('PersonajesScreen')}/>
      </ImageBackground>
    </View >
  )
}

export default PortadaScreen;