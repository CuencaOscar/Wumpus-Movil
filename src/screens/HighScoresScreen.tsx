import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, useWindowDimensions, View } from 'react-native';
import scores from '../data/scores';
import { PropsScores } from '../data/scores';
import firestore from '@react-native-firebase/firestore';

const HighScoresScreen = () => {

  const { width, height } = useWindowDimensions()

  const [data, setData] = useState<any>()

  const loadData = async () => {
    try {
      const highscores = await firestore().collection('highscores').orderBy('score', 'desc').limit(10).get();
      setData(highscores.docs)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  const renderMenuItem = ({ item, index }: any) => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <View style={{ alignItems: 'center', width: '25%' }}>
          {(index + 1 === 1) ?
            <View style={{ justifyContent: 'center' }}>
              <Image style={{ width: 30, height: 30, position: 'absolute', left: '-30%' }} source={require('../../images/estrelladorada.png')} />
              <Text style={{ fontSize: 30 }}>{index + 1}</Text>
            </View>
            :
            (index + 1 === 2) ?
              <View style={{ justifyContent: 'center' }}>
                <Image style={{ width: 30, height: 30, position: 'absolute', left: '-30%' }} source={require('../../images/estrellaplateada.png')} />
                <Text style={{ fontSize: 30 }}>{index + 1}</Text>
              </View>
              :
              (index + 1 === 3) ?
                <View style={{ justifyContent: 'center' }}>
                  <Image style={{ width: 30, height: 30, position: 'absolute', left: '-30%' }} source={require('../../images/estrellabronceada.png')} />
                  <Text style={{ fontSize: 30 }}>{index + 1}</Text>
                </View>
                :
                <Text style={{ fontSize: 30 }}>{index + 1}</Text>

          }
        </View>
        <View style={{ alignItems: 'center', width: '25%' }}>
          <Text style={{ fontSize: 30 }}>{item.data().level}</Text>
        </View>
        <View style={{ alignItems: 'center', width: '25%' }}>
            <Text style={{ fontSize: 30 }}>{item.data().score}</Text>
        </View>
        <View style={{ alignItems: 'center', width: '25%' }}>
          <Text style={{ fontSize: 30 }}>{item.data().name}</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: height * 0.15, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: height * 0.11, fontWeight: 'bold' }}>HIGHSCORES</Text>
      </View>
      <View style={{ height: height * 0.15, alignItems: 'center', flexDirection: 'row' }}>
        <View style={{ alignItems: 'center', width: '25%' }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>POSITION</Text>
        </View>
        <View style={{ alignItems: 'center', width: '25%' }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>LEVEL</Text>
        </View>
        <View style={{ alignItems: 'center', width: '25%' }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>SCORE</Text>
        </View>
        <View style={{ alignItems: 'center', width: '25%' }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>NAME</Text>
        </View>
      </View>
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        decelerationRate={0.7}
        bounces={false}
        renderItem={({ item, index }) => { return (renderMenuItem({ item, index })) }}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default HighScoresScreen;