import React from 'react'
import { FlatList, Image, Text, useWindowDimensions, View } from 'react-native';
import scores from '../data/scores';
import { PropsScores } from '../data/scores';

const HighScoresScreen = () => {

  const { width, height } = useWindowDimensions()

  const renderMenuItem = (scores: PropsScores) => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <View style={{ alignItems: 'center', width: '33.33%' }}>
          {(scores.position === 1) ?
            <View style={{justifyContent: 'center'}}>
              <Image style={{ width: 30, height: 30, position: 'absolute', left: '-30%' }} source={require('../../images/estrelladorada.png')} />
              <Text style={{ fontSize: 30 }}>{scores.position}</Text>
            </View>
            :
            (scores.position === 2) ?
            <View style={{justifyContent: 'center'}}>
              <Image style={{ width: 30, height: 30, position: 'absolute', left: '-30%' }} source={require('../../images/estrellaplateada.png')} />
              <Text style={{ fontSize: 30 }}>{scores.position}</Text>
            </View>
            :
            (scores.position === 3) ?
            <View style={{justifyContent: 'center'}}>
              <Image style={{ width: 30, height: 30, position: 'absolute', left: '-30%' }} source={require('../../images/estrellabronceada.png')} />
              <Text style={{ fontSize: 30 }}>{scores.position}</Text>
            </View>
            :
            <Text style={{ fontSize: 30 }}>{scores.position}</Text>
          }
        </View>
        <View style={{ alignItems: 'center', width: '33.33%' }}>
          <Text style={{ fontSize: 30 }}>{scores.score}</Text>
        </View>
        <View style={{ alignItems: 'center', width: '33.33%' }}>
          <Text style={{ fontSize: 30 }}>{scores.name}</Text>
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
        <View style={{ alignItems: 'center', width: '33.33%' }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>POSITION</Text>
        </View>
        <View style={{ alignItems: 'center', width: '33.33%' }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>SCORE</Text>
        </View>
        <View style={{ alignItems: 'center', width: '33.33%' }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>NAME</Text>
        </View>
      </View>
      <FlatList
        data={scores}
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        decelerationRate={0.7}
        bounces={false}
        renderItem={({ item }) => renderMenuItem(item)}
      />
    </View>
  )
}

export default HighScoresScreen;