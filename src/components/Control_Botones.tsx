import React from 'react'
import { StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import personajes from '../data/personajes';

interface Props {
  name: string,
  direction?: string,
  onPress?: () => void,
  params: number
}

const Control_Botones = ({ name, direction, onPress, params }: Props) => {

  const { width, height } = useWindowDimensions()

  return (
    <View style={
      [
        (direction === 'left')
          ?
          {
            top: height * 0.25 - 35,
            // right: height * 0.25 + 35,
            position: 'absolute',
            zIndex: 2
          }
          :
          (direction === 'right')
            ?
            {
              top: height * 0.25 - 35,
              // right: height * 0.25 - 35 * 3,
              right: 0,
              position: 'absolute',
              zIndex: 2
            }
            :
            (direction === 'up')
              ?
              {
                top: '0%',
                left: height * 0.25 - 35,
                position: 'absolute',
                zIndex: 2
              }
              :
              (direction === 'down')
              &&
              {
                bottom: '0%',
                left: height * 0.25 - 35,
                position: 'absolute',
                zIndex: 2
              }
      ]
    }>
      <TouchableOpacity style={{ backgroundColor: personajes[params].arrowColor, ...styles.button }} onPress={onPress}>
        <Icon name={name} size={45} color="black" />
      </TouchableOpacity>
    </View >
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 50, 
    width: 70, 
    height: 70, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
})

export default Control_Botones;