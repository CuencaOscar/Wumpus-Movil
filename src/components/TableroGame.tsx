import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import personajes from '../data/personajes';

interface Props {
    arreglo: number[],
    valorFilasIzquierda: number[],
    valorFilasDerecha: number[],
    visitado: number[],
    jugador: number,
    tablero: number[],
    i: number,
    j: number,
    params: number
}

export const TableroGame = ({ arreglo, valorFilasDerecha, valorFilasIzquierda, visitado, jugador, tablero, i, j, params }: Props) => {

    //Comprimir mas esta funcion TODO
    const valor = (numero: number) => {

        if (arreglo.slice(0, 6).includes(numero)) {
            return (
                    <View
                        key={numero.toString()}
                        style={styles.cuadrados}>
                        <Image
                            style={{ ...styles.jugador }}
                            source={require('./../../images/Goomba.png')}
                        />
                    </View>
            )
        }
        if (arreglo.slice(6, 12).includes(numero)) {
            return (
                    <View
                        key={numero.toString()}
                        style={styles.cuadrados}>
                        <Image
                            style={{ ...styles.jugador }}
                            source={require('./../../images/Pozo.png')}
                        />
                    </View>
            )
        }
        if (arreglo.slice(12, 17).includes(numero)) {
            return (
                    <View
                        key={numero.toString()}
                        style={styles.cuadrados}>
                        <Image
                            style={{ ...styles.jugador }}
                            source={require('./../../images/Moneda_Tablero.png')}
                        />
                    </View>
            )
        }
        if ((arreglo.slice(0, 6).includes(numero + 1) && !valorFilasIzquierda.includes(numero + 1)) || (arreglo.slice(0, 6).includes(numero - 1) && !valorFilasDerecha.includes(numero - 1)) || arreglo.slice(0, 6).includes(numero + 15) || arreglo.slice(0, 6).includes(numero - 15)) {
            return (
                    <View
                        key={numero.toString()}
                        style={styles.cuadrados}>
                        <Image
                            style={{ ...styles.jugador }}
                            source={require('./../../images/Bloque.png')}
                        />
                        <Text style={{ color: 'yellow', fontSize: 10 }}>Rugido</Text>
                    </View>
            )
        }
        if ((arreglo.slice(6, 12).includes(numero + 1) && !valorFilasIzquierda.includes(numero + 1)) || (arreglo.slice(6, 12).includes(numero - 1) && !valorFilasDerecha.includes(numero - 1)) || arreglo.slice(6, 12).includes(numero + 15) || arreglo.slice(6, 12).includes(numero - 15)) {
            return (
                    <View
                        key={numero.toString()}
                        style={styles.cuadrados}>
                        <Image
                            style={{ ...styles.jugador }}
                            source={require('./../../images/Bloque.png')}
                        />
                        <Text style={{ color: 'orange', fontSize: 10 }}>Calor</Text>
                    </View>
            )
        }
        else {
            return (
                <View
                    key={numero.toString()}
                    style={styles.cuadrados}>
                    <Image
                        style={{ ...styles.jugador }}
                        source={require('./../../images/Bloque.png')}
                    />
                </View>
            )
        }
    }

    //Comprimir mas esta funcion TODO
    const valor2 = (caracter: number) => {
        if (!visitado.includes(caracter) && caracter !== jugador && !arreglo.slice(12, 17).includes(caracter)) {
            return (
                <View
                    key={caracter.toString()}
                    style={styles.cuadrados}>
                    <Image
                        style={{ ...styles.jugador }}
                        source={require('./../../images/Bloque2.png')}
                    />
                </View>
            )
        }
        else {
            return (
                <View
                    key={caracter.toString()}
                    style={styles.cuadrados}>
                </View>
            )
        }
    }

    return (
        <View style={{ backgroundColor: '#101010', width: 600, height: 320, marginTop: 15, borderRadius: 25, overflow: 'hidden' }}>
            <View style={{ ...styles.containerdos, position: 'absolute', zIndex: 1 }}>
                {
                    tablero.map(valor)
                }
            </View>
            <View style={{ ...styles.containerdos, position: 'absolute', zIndex: 2 }}>
                {
                    tablero.map(valor2)
                }
            </View>
            {
                <View
                    style={{ ...styles.cuadradostemp, marginLeft: j * 40, marginTop: i * 40, position: 'absolute', zIndex: 3 }}>
                    <Image
                        style={{ ...styles.jugador2 }}
                        source={personajes[params].playerImage}
                    />
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    containerdos: {
        width: 600,
        height: 320,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    cuadradostemp: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    jugador2: {
        height: 40,
        width: 40,
        resizeMode: 'contain',
        zIndex: 1
    },
    cuadrados: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    jugador: {
        position: 'absolute',
        height: 40,
        width: 40,
        resizeMode: 'contain',
        zIndex: -1
    }
})

export default TableroGame;