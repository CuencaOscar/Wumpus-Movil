import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import { ImageSource } from 'react-native-vector-icons/Icon';

interface Props {
  path: ImageSource,
  score: number,
  text: string
}

const Puntaje_Marcador = ({ path, score, text }: Props) => {

  return (
    <View style={{ flexDirection: 'row' }}>
      <Image
        style={{ ...styles.imagenChica }}
        source={path}
      />
      <View style={{ justifyContent: 'space-around', marginLeft: 15 }}>
        <Text style={styles.texto}> {text}:</Text>
        <Text style={styles.texto}> {score}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imagenChica: {
    height: 50,
    width: 50,
    resizeMode: 'contain'
  },
  texto: {
    color: 'white',
    width: 100
  }
})

export default Puntaje_Marcador;