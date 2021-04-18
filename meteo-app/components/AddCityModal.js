import React,{useState} from 'react';
import { StyleSheet, Text, View, Modal, Button, TextInput, TouchableWithoutFeedback, TouchableWithoutFeedbackBase, Keyboard, Dimensions } from 'react-native';
import RoundButton from './RoundButton';
import { colors } from "../utils/colors";


const AddCityModal = (props)=> {

    const [text,setText]=useState("");

   const handleChangedTest = (value) => {
        setText(value)
    }

    const addCityHandler = () => {
        if (text.trim() === "") {
            alert("Scrivi qualcosa");
            return
        }
        props.addCity(text) //passa il testo al nodo superiore
        setText("")         //pulisce la casella
    }

        return (
            <Modal visible={props.visible} animationType={"slide"}>
                <TouchableWithoutFeedback onPress={() => {
                    Keyboard.dismiss()
                }}>

                    <View style={styles.container}>

                        <Text style={styles.title}>Aggiungi città</Text>

                        <View style={{ flexDirection: 'row', alignItems: "center" }} >
                            <TextInput value={text}
                                onChangeText={handleChangedTest}
                                style={styles.input}
                                placeholder={"Aggiungi città"}
                                autoCorrect={false} />
                            <Button title={"Add"} onPress={addCityHandler} />
                        </View>


                        <RoundButton style={styles.roundButton} onPress={props.closeModal} plusButton={false} />



                    </View>

                </TouchableWithoutFeedback>

            </Modal>
        )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1, marginTop: 50, alignItems: "center", justifyContent: "center",
    },
    input: {
        width: "70%",
        // width: Dimensions.get("window").width/2,
        borderBottomWidth: 1,
        paddingVertical: 15,
        paddingLeft: 20,
        marginRight: 10,
        borderBottomColor: colors.mainOrange
    },

    title: {
        fontSize: 22,
        //   fontWeight: "600",
        marginBottom: 10,
    },
    roundButton: {
        marginTop: 30,
        position: "absolute",
        bottom: Dimensions.get("window").height > 600 ? 50 : 30,
    }

})


export default AddCityModal;