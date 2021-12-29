import React from 'react'
import { Image, StyleSheet, useWindowDimensions } from 'react-native';
import personajes from '../data/personajes';

interface Props {
  params: number
}

export const JugadorPlay = ({ params }: Props) => {

  const { width, height } = useWindowDimensions()

  return (
    <Image
      style={{ ...styles.imagenGrande, height: height * 0.5, width: width - 600 }}
      source={personajes[params].playerImage}
    />
  )
}

const styles = StyleSheet.create({
  imagenGrande: {
    resizeMode: 'contain' //Sirve para no ajustar la imagen al espacio requerido 
  },
})

export default JugadorPlay;