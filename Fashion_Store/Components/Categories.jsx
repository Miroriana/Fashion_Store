import react from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'



export default function Categories({ image, categories, meal }) {

  return (
  <View>
    <View style={{ flexDirection: 'row', gap: 10 }}>
      <TouchableOpacity>
        <Image source={{ uri: image }} style={{ width: 50, height: 50, borderRadius: 50 }} />
      </TouchableOpacity>
      <View style={{ paddingTop: 10 }}>
        <Text style={{ color: 'white' }}>{meal}</Text>
        <Text style={{ color: 'white' }}>255 grams</Text>
      </View>
      </View>
      <Text style={{color:'white', textAlign: 'right', }}>100$</Text>
  </View>
    
  )
}