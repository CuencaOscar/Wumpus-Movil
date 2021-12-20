import { createContext } from "react";
import Sound from 'react-native-sound'
import React from 'react'

//Asi va a lucir mi context
export interface SoundState {
    portada: Sound,
    seleccion: Sound,
    jugando: Sound,
    muerte: Sound,
    moneda: Sound,
    victoria: Sound,
    prueba: string,
    movimiento: Sound,
    reproducir: (name:Sound) => void
}

//Estado inicial

export const soundInitialState: SoundState = {
    portada: new Sound('portada.mp3'),
    seleccion: new Sound('seleccion.mp3'),
    jugando: new Sound('jugando.mp3'),
    muerte: new Sound('muerte.mp3'),
    moneda: new Sound('moneda.mp3'),
    victoria: new Sound('victoria.mp3'),
    prueba: 'Confirma',
    movimiento: new Sound('movimiento.mp3'),
    reproducir: (name) => {name.play()}
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