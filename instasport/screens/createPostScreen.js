import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, KeyboardAvoidingView, ScrollView } from 'react-native';
import Data from "../data/fake-data";
import { SCREEN_WIDTH, SCREEN_HEIGHT, isIOS } from "../utils/helper";
import axios from "axios";

export default function createPost() {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitData = async () => {
        const url = `https://instasport-3a33a-default-rtdb.europe-west1.firebasedatabase.app/post.json`;
        const data = await axios.post(url, {
            title: title,
            image: image,
            description: description,
            id: 10,
            userId: "u1",
            userName: "Billy",
            userImage: "https://images.unsplash.com/photo-1552072805-2a9039d00e57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
        });
        setTitle("");
        setDescription("");
        setImage("");

    };

    return (
        <KeyboardAvoidingView keyboardVerticalOffset={100} style={{ flex: 1 }}>

            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>titolo del post </Text>
                <TextInput style={styles.input} placeholder={"scrivere il titolo"} value={title} onChangeText={value => setTitle(value)} />
                <Text style={styles.title}>immagine del post </Text>
                <TextInput style={styles.input} placeholder={"scrivi l'URL"} value={image} onChangeText={value => setImage(value)} />
                <Text style={styles.title}>descrizione del post </Text>
                <TextInput style={styles.input} placeholder={"scrivi la descrizinoe"} value={description} onChangeText={value => setDescription(value)} />
                <Button title={"invia"} onPress={onSubmitData} style={{ marginTop: 200 }} />

                <StatusBar style="auto" />
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
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

});
