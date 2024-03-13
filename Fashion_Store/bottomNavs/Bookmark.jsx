import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const BookmarkComponent = ({ recentPicture }) => {
    return (
        <View>
            <TouchableOpacity>
                <ImageBackground source={{ uri: `${recentPicture.strMealThumb} ` }}
                    style={{ width: "100%", height: "100%", marginHorizontal: "6%" }}
                    resizeMode='cover'
                    borderRadius={10}
                >
                </ImageBackground>
            </TouchableOpacity>

        </View>
    )
}

export default BookmarkComponent;

