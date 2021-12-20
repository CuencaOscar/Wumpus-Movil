import { NodePath } from '@babel/core';
import React from 'react'
import { Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { ImageSource } from 'react-native-vector-icons/Icon';

interface Props {
    path: ImageSource,
    score: number,
    text: string
}

const Puntaje_Marcador = ({ path, score, text }: Props) => {

    const { width, height } = useWindowDimensions()

    return (
        <View style={{ flexDirection: 'row'}}>
            <Image
                style={{...styles.imagenChica}}
                source={path}
            />
            <View style={{justifyContent:'space-around', marginLeft:15}}>
                <Text style={styles.texto}> {text}:</Text>
                <Text style={styles.texto}> {score}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    imagenChica: {
        // backgroundColor: 'red',
        height: 50,
        width: 50,
        resizeMode: 'contain' //Sirve para no ajustar la imagen al espacio requerido 
    },
    texto: {
        color: 'white',
        width: 100
    }
})

export default Puntaje_Marcador;