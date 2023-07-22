import {StyleSheet, View, Text} from "react-native";
import React from "react";
import {useState} from 'react'
import { TextInput } from "react-native-web";

const MyInput = () => {

    const [text,setText] = useState('');

    return(
        <view style={styles.container}>

            <TextInput
             placeholder = 'Enter Text'
             style = {styles.TextInputStyle}
             value = {text}
             onChangeText={() => {setText(value)}}
            />
            <Text>{'\n\n'}You type: {text}</Text>
            <button 
             title='reset'
             onPress={() => {setText('Hello')}}
             />

        </view>
    )
}

export default MyInput

const styles = StyleSheet.create({
    container:{
        flex:1, 
        padding:35
    },
    TextInputStyle:{
        width:'100%',
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginTop: 15,
    }
});