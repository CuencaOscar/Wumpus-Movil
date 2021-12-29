import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect } from 'react'
import { Image, ImageBackground, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import {
  hideNavigationBar,
} from 'react-native-navigation-bar-color';
import Sound from 'react-native-sound'
import SoundContext from '../context/SoundContext';

interface Props extends StackScreenProps<any, any> { }

const PortadaScreen = ({ navigation }: Props) => {

  const { soundState} = useContext(SoundContext)

  const { width, height } = useWindowDimensions()

  hideNavigationBar();

  console.log(soundState.portada.setNumberOfLoops(-1), soundState.portada.setVolume(0.05), soundState.portada.play())

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        resizeMode='cover'
        style={{
          flex: 1
        }}
        source={require('./../../images/MarioPortada.jpg')}
      >
        <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
          <View style={{ height: height * 0.85, width: 300, right: 50, backgroundColor: 'white', opacity: 0.17, borderRadius: 15, alignItems: 'center', position: 'absolute', zIndex: 1 }} />
          <View style={{ height: height * 0.85, width: 300, right: 50, position: 'absolute', zIndex: 2, alignItems: 'center', paddingVertical: 10, justifyContent: 'center', borderColor:'white', borderWidth:2, borderRadius:15 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: 'white', fontSize: 35, fontWeight: 'bold' }}>Mario's</Text>
              <Text style={{ color: 'white', fontSize: 35, fontWeight: 'bold' }}>Grid</Text>
            </View>
            <View>
              <TouchableOpacity>
                <View style={{ backgroundColor: 'black', borderRadius: 20, paddingHorizontal: 20, marginVertical: 10 }}>
                  <Text style={{ fontSize: 20, color: 'white' }}>High Scores</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={{ backgroundColor: 'black', borderRadius: 20, paddingHorizontal: 20, marginVertical: 10, alignItems:'center' }}>
                  <Text style={{ fontSize: 20, color: 'white' }}>Music</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={{ backgroundColor: 'black', borderRadius: 20, paddingHorizontal: 20, marginVertical: 10 }}>
                  <Text style={{ fontSize: 20, color: 'white' }}>Instructions</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {navigation.navigate('PersonajesScreen'), soundState.portada.stop(),  soundState.seleccion.setNumberOfLoops(-1), soundState.seleccion.setVolume(0.05), soundState.seleccion.play()}} style={{ backgroundColor: 'black', borderRadius: 20, alignItems: 'center', marginVertical: 10 }}>
                <View>
                  <Text style={{ fontSize: 20, color: 'white' }}>Play</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View >
  )
}

export default PortadaScreen;