import {Platform, Dimensions} from "react-native";

const isIOS= Platform.OS==="ios";
const isAndroid= Platform.OS==="android";
const {width: SCREEN_WIDTH, height:SCREEN_HEIGHT}=Dimensions.get("window");

export {
    isIOS,isAndroid,SCREEN_HEIGHT,SCREEN_WIDTH
}