import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ChartsOne from '../componets/ChartsOne'
import Widget from '../componets/Widget'

const HomeScreen = () => {
  return (
    <ScrollView style={{backgroundColor: "#fff"}}>
      <Widget />
      <ChartsOne />
    </ScrollView>
  )
}

export default HomeScreen