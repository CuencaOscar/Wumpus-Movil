import React, { useContext, useEffect, useState } from 'react'
import { ActivityIndicator, Button, Image, Modal, StatusBar, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import Matriz from '../components/Matriz';
import Random from '../components/Random';
import {
  hideNavigationBar,
} from 'react-native-navigation-bar-color';
import Puntaje from '../components/Puntaje';
import TableroGame from '../components/TableroGame';
import Control from '../components/Control';
import JugadorPlay from '../components/JugadorPlay';
import personajes from '../data/personajes';
import { StackScreenProps } from '@react-navigation/stack';
import Sound from 'react-native-sound'
import SoundContext from '../context/SoundContext';

interface Props extends StackScreenProps<any, any> { }


const GameScreen = ({ route }: Props) => {

  const params = route.params!.id

  const { soundState} = useContext(SoundContext)

  // console.log(params)

  hideNavigationBar();

  const StatusBarHeight = StatusBar.currentHeight

  const [tablero, setTablero] = useState<number[]>([])

  const [arreglo, setArreglo] = useState<number[]>([])

  const [visitado, setVisitado] = useState<number[]>([])

  const [jugador, setJugador] = useState<number>(0)

  const [isLoading, setIsLoading] = useState(true)

  const [i, setI] = useState<number>(0)

  const [j, setJ] = useState<number>(0)

  let valorFilasIzquierda = [0, 15, 30, 45, 60, 75, 90, 105]

  let valorFilasDerecha = [14, 29, 44, 59, 74, 89, 104, 119]

  const [bandera, setBandera] = useState<number>(0)

  const [bandera2, setBandera2] = useState<number>(0)

  const [bandera3, setBandera3] = useState<number>(0)

  const [level, setLevel] = useState<number>(1)

  const [modal, setModal] = useState(false)

  const [modal2, setModal2] = useState(false)

  const [score, setScore] = useState<number>(0) //Almacenamos el puntaje

  const [atack, setAtack] = useState<number>(3) //Almacenamos la cantidad de ataques

  const [coins, setCoins] = useState<number>(5) //Almacenamos las monedas

  useEffect(() => {
    // setIsLoading(true)
    soundState.movimiento.setVolume(0.05)
    soundState.muerte.setVolume(0.05)
    setTablero(Matriz().tablero)
    setArreglo(Random().posiciones)
    setVisitado([])
    setJugador(0)
    setI(0)
    setJ(0)
    setCoins(5)
    setScore(0)
    setModal(false)
    setBandera2(0)
    if (bandera === 0){
      setTimeout(() => {
        setIsLoading(false)
      }, 4000);
    }
    if (bandera !== 0){
      setTimeout(() => {
        setIsLoading(false)
      }, 4000);
    }
  }, [bandera])

  useEffect(() => {
    if (coins === 0) {
      setLevel(level + 1)
      setModal2(true)
      setArreglo(Random().posiciones)
      setVisitado([])
      setJugador(0)
      setI(0)
      setJ(0)
      setCoins(5)
      soundState.jugando.stop()
      soundState.victoria.setVolume(0.05)
      soundState.victoria.play()
      setTimeout(() => {
        setModal2(false)
        setModal(false)
        soundState.jugando.play()
      }, 4700);
    }
  }, [coins])

  const { width, height } = useWindowDimensions()

  let valorColumnasSuperior = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

  let valorColumnasInferior = [105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119]

  //Funcion para cuando presionemos la tecla derecha
  const TurnRight = () => {
    soundState.movimiento.stop()
    if (!valorFilasDerecha.includes(jugador)) {
      setJugador(jugador + 1)
      setJ(j + 1)
      setScore(score - 10)
      setVisitado([...visitado, jugador])
      soundState.movimiento.play()
    }
    if (arreglo.slice(0, 12).includes(jugador + 1)) {
      soundState.movimiento.stop()
      soundState.jugando.stop()
      soundState.muerte.setVolume(0.05)
      soundState.muerte.play()
    }
    if (arreglo.slice(12, 17).includes(jugador + 1)) {
      soundState.movimiento.stop()
      soundState.moneda.setVolume(0.05)
      soundState.moneda.play()
    }
  }

  //Funcion para cuando presionemos la tecla izquierda
  const TurnLeft = () => {
    soundState.movimiento.stop()
    if (!valorFilasIzquierda.includes(jugador)) {
      setJugador(jugador - 1)
      setJ(j - 1)
      setScore(score - 10)
      setVisitado([...visitado, jugador])
      soundState.movimiento.play()
    }
    if (arreglo.slice(0, 12).includes(jugador - 1)) {
      soundState.movimiento.stop()
      soundState.jugando.stop()
      soundState.muerte.play()
    }
    if (arreglo.slice(12, 17).includes(jugador - 1)) {
      soundState.movimiento.stop()
      soundState.moneda.play()
    }
  }

  //Funcion para cuando presionemos la tecla abajo
  const TurnDown = () => {
    soundState.movimiento.stop()
    if (!valorColumnasInferior.includes(jugador)) {
      setJugador(jugador + 15)
      setI(i + 1)
      setScore(score - 10)
      setVisitado([...visitado, jugador])
      soundState.movimiento.play()
    }
    if (arreglo.slice(0, 12).includes(jugador + 15)) {
      soundState.movimiento.stop()
      soundState.jugando.stop()
      soundState.muerte.play()
    }
    if (arreglo.slice(12, 17).includes(jugador + 15)) {
      soundState.movimiento.stop()
      soundState.moneda.play()
    }
  }

  const TurnUp = () => {
    soundState.movimiento.stop()
    if (!valorColumnasSuperior.includes(jugador)) {
      setJugador(jugador - 15)
      setI(i - 1)
      setScore(score - 10)
      setVisitado([...visitado, jugador])
      soundState.movimiento.play()
    }
    if (arreglo.slice(0, 12).includes(jugador - 15)) {
      soundState.movimiento.stop()
      soundState.jugando.stop()
      soundState.muerte.play()
    }
    if (arreglo.slice(12, 17).includes(jugador - 15)) {
      soundState.movimiento.stop()
      soundState.moneda.play()
    }
  }

  const ScoreValue = () => {
    if (arreglo.slice(12, 17).includes(jugador)) {
      let posicion = arreglo.indexOf(jugador)
      arreglo[posicion] = 200
      setCoins(coins - 1)
      setScore(score + 1010)
    }
    if (arreglo.slice(0, 12).includes(jugador) && bandera2 === 0) {
      let posicion = arreglo.indexOf(jugador)
      setBandera2(bandera2 + 1)
      setBandera3(bandera3 + 1)
      setLevel(1)
      setModal(true)
    }
  }

  {
    ScoreValue()
  }

  const Activity = () => {
    return (
      <View style={{ backgroundColor: 'black', position: 'absolute', zIndex: 6, width: '100%', height: '100%', justifyContent: 'flex-end', alignItems: 'center' }}>
        <ActivityIndicator color={'white'} size={50} />
        {/* <Text style={{fontSize:25, color:'white'}}>Loading Stage</Text> */}
        <Image source={require('./../../images/Loading.png')} style={{
          width: width * 0.45,
          height: '50%',
          resizeMode: 'contain',
          marginTop: 20
        }} />
        {console.log('Entro')}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {isLoading && Activity()}
      <View>
        <Puntaje score={score} atack={atack} coins={coins} params={params} />
        <TableroGame
          arreglo={arreglo}
          valorFilasDerecha={valorFilasDerecha}
          valorFilasIzquierda={valorFilasIzquierda}
          visitado={visitado}
          jugador={jugador}
          tablero={tablero}
          i={i}
          j={j}
          params={params} />
      </View>
      <View style={{ height: height, justifyContent: 'center', alignItems: 'center' }}>
        <JugadorPlay params={params} />
        <Control TurnUp={TurnUp} TurnLeft={TurnLeft} TurnDown={TurnDown} TurnRight={TurnRight} params={params} />
      </View>
      <Modal
        transparent={true}
        visible={modal} //Lose
        animationType='slide'
        statusBarTranslucent
      >
        <View style={{ backgroundColor: '#000000aa', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <View style={{ opacity: 0.7, width: 300, height: height * 0.9, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ height: height * 0.5, resizeMode: 'contain' }} source={personajes[params].LoseImage} />
            <Text style={{ fontSize: 50, color: 'white' }}>Game Over {console.log('Game Over')}</Text>
            <TouchableOpacity onPress={() => { setModal(false), setBandera(bandera + 1), soundState.muerte.stop(), soundState.jugando.play() }}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ backgroundColor: 'green', width: width * 0.15, borderRadius: 15, alignItems: 'center', marginHorizontal: 10 }}>
                  <Text style={{ fontSize: 25, color: 'white' }}>Retry</Text>
                </View>
                <View style={{ backgroundColor: 'red', width: width * 0.15, borderRadius: 15, alignItems: 'center', marginHorizontal: 10 }}>
                  <Text style={{ fontSize: 25, color: 'white' }}>Quit</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        // transparent={true}
        visible={modal2} //Next Level
        animationType='slide'
        statusBarTranslucent
      >
        <View style={{ backgroundColor: 'black', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <View style={{ opacity: 0.7, width: 300, height: height * 0.9, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ height: height * 0.5, resizeMode: 'contain' }} source={personajes[params].winImage} />
            <Text style={{ fontSize: 35, color: 'white' }}>Level {console.log('Game Over Win')} {level}</Text>
            <Text style={{ fontSize: 20, color: 'white' }}>Score: {score}</Text>
          </View>
        </View>
      </Modal>
    </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imagenChica: {
    height: 50,
    width: 50,
    resizeMode: 'contain' //Sirve para no ajustar la imagen al espacio requerido 
  }
})

export default GameScreen;