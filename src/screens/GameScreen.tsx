import React, { useContext, useEffect, useState } from 'react'
import { ActivityIndicator, Image, Modal, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native';
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
import SoundContext from '../context/SoundContext';
import firestore from '@react-native-firebase/firestore';

interface Props extends StackScreenProps<any, any> { }


const GameScreen = ({ route, navigation }: Props) => {

  const [state, setState] = useState({
    highscore: 0,
    name: ''
  })

  const params = route.params!.id

  const { soundState } = useContext(SoundContext)

  hideNavigationBar();

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
    if (bandera === 0) {
      setTimeout(() => {
        setIsLoading(false)
      }, 4000);
    }
    if (bandera !== 0) {
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
      }, 4900);
    }
  }, [coins])

  const { width, height } = useWindowDimensions()

  let valorColumnasSuperior = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

  let valorColumnasInferior = [105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119]

  //Funcion para cuando presionemos la tecla derecha
  const TurnRight = () => {
    soundState.movimiento.stop()
    if (!valorFilasDerecha.includes(jugador) && !modal) {
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
    if (!valorFilasIzquierda.includes(jugador) && !modal) {
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
    if (!valorColumnasInferior.includes(jugador) && !modal) {
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
    if (!valorColumnasSuperior.includes(jugador) && !modal) {
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

  const handleChangeText = (name:any, value: any) => {
    setState({...state, [name]: value, highscore:score})
  }

  const saveNewRecord = () => {
    if (state.name === ''){
      console.log('Escribe tu nombre vg')
    }
    else {
      navigation.navigate('PortadaScreen')
    }
  }

  const Activity = () => {
    return (
      <View style={{ backgroundColor: 'black', position: 'absolute', zIndex: 6, width: '100%', height: '100%', justifyContent: 'flex-end', alignItems: 'center' }}>
        <ActivityIndicator color={'white'} size={50} />
        <Image source={require('./../../images/Loading.png')} style={{
          width: width * 0.45,
          height: '50%',
          resizeMode: 'contain',
          marginTop: 20
        }} />
      </View>
    );
  }

  return (
    <View style={{ ...styles.center, ...styles.container }}>
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
      <View style={{ height: height, ...styles.center }}>
        <JugadorPlay params={params} />
        <Control TurnUp={TurnUp} TurnLeft={TurnLeft} TurnDown={TurnDown} TurnRight={TurnRight} params={params} />
      </View>
      <Modal
        transparent={true}
        visible={modal}//modal
        animationType='slide'
        statusBarTranslucent
      >
        <View style={{ backgroundColor: '#000000aa', ...styles.center, flex: 1 }}>
          <View style={{ width: width * 0.4, height: height * 0.9, borderRadius: 10, ...styles.center }}>
            <Image style={{ height: height * 0.5, resizeMode: 'contain' }} source={personajes[params].LoseImage} />
            <Text style={{ fontSize: 50, color: 'white' }}>Game Over </Text>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => { setModal(false), setBandera(bandera + 1), soundState.muerte.stop(), soundState.jugando.play() }}>
                <View style={{ backgroundColor: 'green', width: width * 0.15, ...styles.center, ...styles.buttonModal }}>
                  <Text style={styles.textLose}>Retry</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { setModal(false), setBandera(bandera + 1), soundState.muerte.stop(), soundState.jugando.stop(), navigation.navigate('PortadaScreen') }}>
                <View style={{ backgroundColor: 'red', width: width * 0.15, ...styles.center, ...styles.buttonModal }}>
                  <Text style={styles.textLose}>Quit</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal transparent={true} statusBarTranslucent visible={modal}>
        <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center', backgroundColor: '#000000aa' }}>
          <View style={{ position: 'absolute', width: width * 0.5, height: height * 0.4, overflow: 'hidden', alignItems: 'center', justifyContent: 'center', borderBottomWidth: height * 0 }}>
            <View style={{ width: width * 0.40, height: height * 0.8, backgroundColor: 'green', transform: [{ rotate: '37.5deg' }], position: 'absolute' }} />
            <View style={{ width: width * 0.40, height: height * 0.8, backgroundColor: 'green', transform: [{ rotate: '-37.5deg' }], position: 'absolute' }} />
            <Text style={{color: 'white', fontWeight: 'bold'}}>HIGH SCORE</Text>
            <TextInput style={styles.input} placeholder='ENTER YOUR NAME' onChangeText={(value) => {handleChangeText('name', value)}} />
            <TouchableOpacity onPress={() => { saveNewRecord() }}>
              <View style={{width:width*0.1, height: height*0.09, backgroundColor:'transparent', justifyContent: 'center', alignItems: 'center', overflow: 'hidden'}}>
                <View style={{ width: width * 0.2, height: height * 0.15, backgroundColor: 'black', transform: [{ rotate: '-37.5deg' }], position: 'absolute'}} />
                <Text style={{color: 'white', fontWeight: 'bold'}}>Yes</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        visible={modal2}
        animationType='slide'
        statusBarTranslucent
      >
        <View style={{ backgroundColor: 'black', ...styles.center, flex: 1 }}>
          <View style={{ width: width * 0.4, height: height * 0.9, borderRadius: 10, ...styles.center }}>
            <Image style={{ height: height * 0.5, resizeMode: 'contain' }} source={personajes[params].winImage} />
            <Text style={{ fontSize: 35, color: 'white' }}>Level  {level}</Text>
            <Text style={{ fontSize: 20, color: 'white' }}>Score: {score}</Text>
          </View>
        </View>
      </Modal>
    </View>)
}

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    backgroundColor: '#222222',
    flexDirection: 'row',
  },
  imagenChica: {
    height: 50,
    width: 50,
    resizeMode: 'contain' //Sirve para no ajustar la imagen al espacio requerido 
  },
  textLose: {
    fontSize: 25,
    color: 'white'
  },
  buttonModal: {
    borderRadius: 15,
    marginHorizontal: 10
  },
  input: {
    height: '25%',
    width: '80%',
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
})

export default GameScreen;