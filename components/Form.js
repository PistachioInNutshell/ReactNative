import {StyleSheet, View, Text, TextInput, Button} from "react-native";
import React, {useState} from 'react'

const Form = () => {

    const [name,setName] = useState('Taylor');
    const [age,setAge] = useState('42');

    return(
        <view style={styles.container}>

            <TextInput
             placeholder = 'Enter Name'
             style = {styles.TextInputStyle}
             value = {name}
             onChangeText={(value) => {setText(value)}}
            />

            <Text>{'\n\n'}</Text>

            <button 
             title='Plus'
             onPress={() => {setAge(age+1)}}
             />
             <Text>{'\n\n'}Hello,{name}. You are {age}</Text>
        </view>
    )
}

export default Form

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
