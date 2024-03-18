import React from 'react'
import { Text, View, Dimensions } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native-paper';

const { width, height } = Dimensions.get("screen");

export default function search() {
  return (
    <View style={{ backgroundColor: "black", width: width, height: height, padding: 10 }}>
      <TextInput
        style={{
          height: 20,
          marginHorizontal: 15,
          width: "95%",
          padding: 10,
          backgroundColor: "white",
          alignSelf: "center",
          color: "white",
          borderColor: "transparent",
          marginTop: 20,
        }}
        mode="outlined"
        textColor='white'
        outlineStyle={{ borderRadius: 50, borderColor: "transparent" }}
        theme={{ colors: { text: "white", primary: "#B1B3B3" } }}
        placeholder='Search saved Recipes'
        left={<TextInput.Icon icon={"magnify"} color={"grey"} style={{ paddingTop: 17, alignSelf: "center", opacity: 0.5 }} />}
      />

      <Text style={{ color: "white", fontSize: 24, fontWeight: 500, marginHorizontal: 15, paddingTop: 30 }}>All Categories</Text>

    </View>
  )
}
