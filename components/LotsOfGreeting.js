import {View, Text} from "react-native";
import React from "react";

const Greeting = ([props]) => {
    return(
        <view>
            <text>Hello {props.name}</text>
        </view>
    )
}

const LotsOfGreeting = () => {
    return(
        <view style={{alignItems:'center', top:50}}>
            <Greeting name = "Merry Christmas"/>
            <Greeting name = "Happy New Year"/>
            <Greeting name = "Songkarn Festival"/>
        </view>
    )
}

export default LotsOfGreeting

const styles = StyleSheet.create({});