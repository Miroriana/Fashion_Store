import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function SignUp() {
    return (
        <View style={{ width: "100%", height: "100%" }}>
            <View style={{ marginLeft: 13 }}>
                <Text style={{ color: "#EB9800", alignSelf: "center", fontSize: 20, marginTop: 55 }}>CookSide</Text>
                <Text style={{ width: "95%", marginTop: 15, fontWeight: '100' }}>Before you try your free trial. Please create an account first by sign up.</Text>
            </View>
            <View style={{ marginLeft: 13, marginTop: 15 }}>

                <Text style={{ marginBottom: 5, fontWeight: "bold" }}>Name</Text>
                <TextInput style={{ backgroundColor: "whitesmoke", width: "95%", padding: 7, borderRadius: 10, borderWidth: 1, borderColor: "#EB9800" }}></TextInput>

                <Text style={{ marginBottom: 5, fontWeight: "bold",marginTop:15}}>Email</Text>
                <TextInput style={{ backgroundColor: "whitesmoke", width: "95%", padding: 7, borderRadius: 10, borderWidth: 1, borderColor: "#EB9800" }}></TextInput>

                <Text style={{ marginBottom: 5, fontWeight: "bold",marginTop:15}}>Phone Number</Text>
                <TextInput style={{ backgroundColor: "whitesmoke", width: "95%", padding: 7, borderRadius: 10, borderWidth: 1, borderColor: "#EB9800" }}></TextInput>

                <Text style={{ marginBottom: 5, fontWeight: "bold",marginTop:15}}>Password</Text>
                <TextInput style={{ backgroundColor: "whitesmoke", width: "95%", padding: 7, borderRadius: 10, borderWidth: 1, borderColor: "#EB9800" }}></TextInput>

                <Text style={{ marginBottom: 5, fontWeight: "bold",marginTop:15}}>Confirm Password</Text>
                <TextInput style={{ backgroundColor: "whitesmoke", width: "95%", padding: 7, borderRadius: 10, borderWidth: 1, borderColor: "#EB9800" }}></TextInput>
            </View>
            <TouchableOpacity style={{backgroundColor:"#EB9800",width:"91%",marginBottom:100,display:"flex",justifyContent:"center",alignSelf:"center",borderRadius:30,marginTop:30}}>
                <Text style={{color:"white",padding:12,textAlign:"center",fontWeight:'400'}}>Sign Up</Text>
            </TouchableOpacity>

        </View>
    )

}