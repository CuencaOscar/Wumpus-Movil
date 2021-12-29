import { createContext } from "react"; //Libreria para crear el context
import Sound from 'react-native-sound' //Libreria para el sonido
import React from 'react'

//Asi va a lucir mi context (Datos globales -> Sonidos y efectos para el juego)
export interface SoundState {
    portada: Sound, //Inicio de la aplicacion
    seleccion: Sound, //Seleccion de personaje
    jugando: Sound, //Sonido mientras se juega
    muerte: Sound, //Perder
    moneda: Sound, //Captura de moneda
    victoria: Sound, //Ganar
    movimiento: Sound, //Pasos
}

//Estado inicial (Creo las instancias)
export const soundInitialState: SoundState = {
    portada: new Sound('portada.mp3'),
    seleccion: new Sound('seleccion.mp3'),
    jugando: new Sound('jugando.mp3'),
    muerte: new Sound('muerte.mp3'),
    moneda: new Sound('moneda.mp3'),
    victoria: new Sound('victoria.mp3'),
    movimiento: new Sound('movimiento.mp3'),
}

//Definir todo lo que compartire con mis hijos y como luce
export interface SoundContextProps {
    soundState: SoundState
}

//Crear el contexto

const SoundContext = createContext({} as SoundContextProps)

//Exponemos el proveeder de la informacion

export const SoundProvider = ({children}: any) => {
    return (
        <SoundContext.Provider value={{
            soundState: soundInitialState,

        }}>
            {children}
        </SoundContext.Provider>
    )
}

export default SoundContext;