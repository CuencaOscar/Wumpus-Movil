import React from 'react'
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import Control_Botones from './Control_Botones';


interface Props {
  TurnUp: () => void,
  TurnLeft: () => void,
  TurnDown: () => void,
  TurnRight: () => void,
  params: number
}

export const Control = ({ TurnUp, TurnLeft, TurnDown, TurnRight, params }: Props) => {

  const { width, height } = useWindowDimensions()

  return (
    <View style={{ height: height * 0.5, width: width - 600, ...styles.center }}>
      <View style={{ width: height * 0.50, height: height * 0.5, ...styles.container }}>
        <Control_Botones name='arrow-up' direction='up' onPress={() => TurnUp()} params={params} />
        <Control_Botones name='arrow-back' direction='left' onPress={() => TurnLeft()} params={params} />
        <Control_Botones name='arrow-down' direction='down' onPress={() => TurnDown()} params={params} />
        <Control_Botones name='arrow-forward' direction='right' onPress={() => TurnRight()} params={params} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center', 
    alignItems: 'center'
  },
  container: {
    borderColor: 'white', 
    borderWidth: 1, 
    backgroundColor: 'black',
    borderRadius: 100
  }
})
export default Control;