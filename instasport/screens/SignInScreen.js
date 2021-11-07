import React, { useState } from "react"
import { View,Text, TextInput,StyleSheet} from "react-native";

const Signin =()=>{
    const [email,setEmail]=useState("");
    return (
        <View style={style.container}>
            <Text style={style.title}>EMAIL</Text>
            <TextInput value={email} onChangeText={(value)=> setEmail(value)} placeholder={"Please Insert Email"} style={style.input}/>
        </View>
    )

}
const style=StyleSheet.create({
    container: {
        alignItems: "center"

    },
    title: {
        fontSize: 20,
        fontWeight: "500",
        marginTop: 10
    },
    input: {
        borderBottomWidth: 1,
        width: "90%",
        marginVertical: 10,
        height: "auto",
        padding: 10
    }

})


export default Signin