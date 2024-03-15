import react from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'

export default function Rounded({image, meal}) {
    return (
        <View>
            <TouchableOpacity>
            <Image source={{ uri: image }} style={{ width: 50, height: 50, borderRadius: 50 }} />
            </TouchableOpacity>
            <Text style={{color:'white'}}>{meal}</Text>
        </View>
    )
}