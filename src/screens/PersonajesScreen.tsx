import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext } from 'react'
import { FlatList, Image, StatusBar, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import personajes from '../data/personajes';
import { PropsData } from '../data/personajes';
import SoundContext from '../context/SoundContext';

interface Props extends StackScreenProps<any,any>{}

export const PersonajesScreen = ({navigation, route}:Props) => {

    // console.log(route.params)

    // console.log(route.params!.funcion)

    const { soundState} = useContext(SoundContext)

    const { width, height } = useWindowDimensions()

    const renderMenuItem = (personajes: PropsData) => {
        return (
            <View style={{ width: width, justifyContent: 'center', alignItems: 'center', borderRadius: 16 }}>
                <View style={{borderRadius: 50,
                            borderWidth: 2,
                            borderColor: 'white',
                            }}>
                    <Image
                        
                        style={{
                            width: width * 0.25,
                            height: width * 0.25,
                            resizeMode: 'contain',
                            overflow: 'hidden',
                            marginVertical: 10
                        }}
                        source={personajes.playerImage}
                    />
                </View>
                <TouchableOpacity onPress={() => {navigation.navigate('GameScreen',{id: personajes.id - 1}), soundState.seleccion.stop(), setTimeout(() => {soundState.jugando.setNumberOfLoops(-1), soundState.jugando.setVolume(0.05), soundState.jugando.play()}, 4500)}}>
                    <View style={{ marginVertical:15, backgroundColor: personajes.arrowColor, width: width * 0.15, borderRadius: 15, justifyContent: 'center', alignItems: 'center', borderWidth:2, borderColor:'white' }}>
                        <Text style={{ fontSize: 25, color:'black', fontWeight:'bold' }}>{personajes.playerName}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'black' }}>
            <StatusBar hidden />
            <View>
                <Text style={{ fontSize: 30, color: 'white' }}>Elija su personaje</Text>
            </View>

            <View style={{ width: width, height: height * 0.8 }}>
                <FlatList
                    data={personajes}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={width}
                    decelerationRate={0.7}
                    bounces={false}
                    renderItem={({ item }) => renderMenuItem(item)}
                />

            </View>
        </View>
    )
}

export default PersonajesScreen;