import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
  text: String,
  onPress?: () => void
}

const ButtonPortada = ({ text, onPress }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.containerButton}>
          <Text style={styles.text}>{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '70%'
  },
  containerButton: {
    backgroundColor: 'black',
    borderRadius: 20,
    paddingHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    color: 'white'
  }
})

export default ButtonPortada;