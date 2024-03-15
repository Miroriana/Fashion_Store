import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { Feather } from 'react-native-vector-icons'

export default function Popular({ image, category, meal, onpress }) {


  return (
    <TouchableOpacity onPress={onpress}>
      <ImageBackground source={{ uri: image }} style={{
        width: 250, height: 150, marginLeft: 10, borderRadius: 10, overflow: 'hidden'
      }}>
        
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, position: 'absolute', bottom: 20, left: 10 }}>{meal}</Text>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17, position: 'absolute', bottom: 5, left: 10 }}>By Emra Harvest</Text>
        <TouchableOpacity>
        <Feather name="bookmark" size={20} color="orange" style={{ position: 'absolute', top: 10, right: 15, backgroundColor: 'white', borderRadius: 20, padding: 2 }} />
        </TouchableOpacity>
      </ImageBackground>
    </TouchableOpacity>
  )
}
