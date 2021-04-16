import React from 'react';
import { StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

const RoundButton = (props) => {

    const plusImage = require("../assets/plus.png");
    const isPlus = props.plusButton;
    const backgroundColor = isPlus ? "green" : "red";
    const transform = isPlus ? [{ rotate: '0deg' }] : [{ rotate: '45deg' }];
    const containerStyle = Dimensions.get("window").height > 600 ? styles.container : styles.smallContainer;
    const plusStyle = Dimensions.get("window").height > 600 ? styles.plusImage : styles.smallImage;

    return (
        <TouchableOpacity onPress={props.onPress} style={[containerStyle, { backgroundColor }, { ...props.style }]}>
            <Image source={plusImage} style={[plusStyle, { transform }]} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"

    },
    smallContainer: {
        width: 30,
        height: 30,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"

    },
    plusImage: {
        width: 30,
        height: 30,
        tintColor: "white",
    },
    smallImage: {
        width: 20,
        height: 20,
        tintColor: "white",
    },
    title: {
        color: 'white',
        fontSize: 22,
    }
})


export default RoundButton