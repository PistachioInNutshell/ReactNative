import {View, Text} from "react-native";
import React from "react";

const Introducting = ({name, surname}) => {
    return(
        <view>
            <text>Your First Name is {name}! and Last name is {surname}</text>
        </view>
    )
}

const CustomText = () => {
    return(
        <view style={{alignItems:'center'}}>
            <Introducting name = "Kittinan" surname = "Kampusa"/>
            <Introducting name = "Nuttapong" surname = "Pratis"/>
        </view>
    )
}

export default CustomText

const styles = StyleSheet.create({});