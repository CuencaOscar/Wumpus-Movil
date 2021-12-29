import React, { useContext } from 'react'
import { View, Text, TouchableOpacity, useWindowDimensions, StyleSheet } from 'react-native';
import SoundContext from '../context/SoundContext';
import ButtonPortada from './ButtonPortada';

interface Props {
  navigationPlay: any,
  navigationScores: any
}

const CardPortada = ({ navigationPlay, navigationScores }: Props) => {

  const { width, height } = useWindowDimensions()

  const { soundState } = useContext(SoundContext)

  let cardwidth: number = width * 0.35

  let cardheight: number = height * 0.85

  // console.log(soundState.portada.setNumberOfLoops(-1), soundState.portada.setVolume(0.05), soundState.portada.play())

  return (
    <View style={styles.containerFirst}>
      <View style={{ ...styles.center, ...styles.stetics, ...styles.containerBehind, height: cardheight, width: cardwidth }} />
      <View style={{ ...styles.center, ...styles.stetics, ...styles.containerFront, height: cardheight, width: cardwidth }}>
        <View style={{ ...styles.center, height: '35%', width: '100%' }}>
          <Text style={styles.title}>Mario's</Text>
          <Text style={styles.title}>Grid</Text>
        </View>
        <View style={{ ...styles.center, height: '65%', width: '100%' }}>
          <ButtonPortada text={"High Scores"} onPress={navigationScores}/>
          <ButtonPortada text={"Music"} onPress={() => { (!soundState.portada.isPlaying()) ? soundState.portada.play() : (soundState.jugando.stop(), soundState.portada.stop())}}/>
          <ButtonPortada text={"Instructions"} />
          <ButtonPortada text={"Play"} onPress={navigationPlay} />
        </View>
        {/* <View>
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
            </View> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerFirst: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  stetics: {
    right: 50,
    borderRadius: 15,
  },
  containerBehind: {
    backgroundColor: 'white',
    opacity: 0.17,
    position: 'absolute',
  },
  containerFront: {
    borderColor: 'white',
    borderWidth: 2,
  },
  title: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold'
  }
})

export default CardPortada;