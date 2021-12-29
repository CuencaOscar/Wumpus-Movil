import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext } from 'react'
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import personajes from '../data/personajes';
import { PropsData } from '../data/personajes';
import SoundContext from '../context/SoundContext';

interface Props extends StackScreenProps<any, any> { }

export const PersonajesScreen = ({ navigation, route }: Props) => {

  const { soundState } = useContext(SoundContext)

  const { width, height } = useWindowDimensions()

  const renderMenuItem = (personajes: PropsData) => {
    return (
      <View style={{ width: width, ...styles.center, borderRadius: 16 }}>
        <View style={styles.containerImage}>
          <Image
            style={{
              width: width * 0.25,
              height: width * 0.25,
              resizeMode: 'contain',
              overflow: 'hidden',
              marginVertical: 10
            }}
            source={personajes.playerImage}
          />
        </View>
        <View style={{width:width * 0.25}}>
          <TouchableOpacity onPress={() => { navigation.navigate('GameScreen', { id: personajes.id - 1 }), soundState.seleccion.stop(), setTimeout(() => { soundState.jugando.setNumberOfLoops(-1), soundState.jugando.setVolume(0.05), soundState.portada.stop(), soundState.jugando.play() }, 4500) }}>
            <View style={{ marginVertical: 15, backgroundColor: personajes.arrowColor, borderRadius: 15, ...styles.center, borderWidth: 2, borderColor: 'white' }}>
              <Text style={{ fontSize: 25, color: 'black', fontWeight: 'bold' }}>{personajes.playerName}</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>
    )
  }

  return (
    <View style={{ flex: 1, ...styles.center, backgroundColor: 'black' }}>
      <StatusBar hidden />
      <View>
        <Text style={styles.title}>Elija su personaje</Text>
      </View>

      <View style={{ width: width, height: height * 0.8 }}>
        <FlatList
          data={personajes}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width}
          decelerationRate={0.7}
          bounces={false}
          renderItem={({ item }) => renderMenuItem(item)}
        />

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerImage: {
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',
  },
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold'
  }
})

export default PersonajesScreen;