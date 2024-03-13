import { StyleSheet, Text, View, Image} from 'react-native';

export default function Splash() {
    return (
    <View style={styles.container}>
        <Image source={require("../assets/image1.png")} />
    </View>
    )

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EB9800',
      alignItems: 'center',
      justifyContent: 'center',
    },
})