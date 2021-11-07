import React from "react";
import { Ionicons } from "@expo/vector-icons";


const HeaderButton = props => {
    const renderLeft = () => {
        return (
            <Ionicons name="md-menu" size={32} style={{ marginLeft: 10 }} onPress={props.onPressLeft} />
        )
    }
    const renderRight = () => {
        return (
            <Ionicons name="md-add-circle-outline" size={32} style={{ marginRight: 10 }} onPress={props.onPressRight} />
        )
    }
    return props.left ? renderLeft() : renderRight()
    
}

export default HeaderButton;