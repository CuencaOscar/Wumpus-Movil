import React from 'react'
import { View } from 'react-native';
import personajes from '../data/personajes';
import Puntaje_Marcador from './Puntaje_Marcador';

interface Props {
  score: number,
  atack: number,
  coins: number,
  params: number
}

export const Puntaje = ({ score, atack, coins, params }: Props) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: 600 }}>
      <Puntaje_Marcador path={personajes[params].scoreImage} score={score} text={'Score'} />
      <Puntaje_Marcador path={personajes[params].atackImage} score={atack} text={'Atack'} />
      <Puntaje_Marcador path={require('./../../images/moneda.png')} score={coins} text={'Coins'} />
    </View>
  )
}

export default Puntaje;