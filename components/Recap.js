import {StyleSheet, View, Text, Button} from "react-native";
import React, {useState} from 'react'

const Recap = () => {

    const [textInputPassword, setPassword] = useState('');
    const [textInputEmail, setEmail] = useState('');

    const alertTextInput = () => {
        alert('email: ' + textInputPassword  
            + '\npassword: ' + textInputEmail);
        return;
    }

    return(
        <view style={styles.container}>
            <TextInput
             placeholder = 'Email'
             style = {styles.input}
             value = {textInputEmail}
             onChangeText={(value) => {setEmail(value)}}
            />

            <Text>{'\n'}</Text>

            <TextInput
             placeholder = 'Password'
             style = {styles.input}
             value = {textInputPassword}
             onChangeText={(value) => {setPassword(value)}}
            />

            <Text>{'\n'}</Text>

            <button 
             title='SUBMIT'
             style={styles.submitButton}
             onPress={() => {alertTextInput()}}
            />
        </view>
    )
}

export default Recap

const styles = StyleSheet.create({
    container: {
        paddingtop: 23,  
    }, 
    input: {
        width: 15, 
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1,
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10, 
        margin: 15,
        height: 40,
    },
    submitButtonText:{
        color: 'White',
    }
});