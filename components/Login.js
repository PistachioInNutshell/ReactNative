import {StyleSheet, View, Text, Button} from "react-native";
import React, {useState} from 'react'

const Login = () => {

    const [textInputName, setName] = useState('');
    const [textInputEmail, setEmail] = useState('');

    const checkTextInput = () => {
        //check for the name TextInput 
        if (!textInputName.trim()){
            alert('Please Enter Name');
            return;
        } //Check for the Email TextInput
        else if (!textInputEmail.trim()){
            alert('Please Enter Email');
            return;
        } //Check for Both Name and Email TextInput
        else if (!textInputName.trim() & !textInputEmail.trim()){
            alert('Please Enter Name and Email');
            return;
        }
         //Checked Successfully
        else {
            alert('Success');
            return;
        }
    }

    return(
        <view style={styles.container}>
            <TextInput
             placeholder = 'Enter Name'
             style = {styles.TextInputStyle}
             value = {textInputName}
             onChangeText={(value) => {setName(value)}}
            />

            <Text>{'\n'}</Text>

            <TextInput
             placeholder = 'Enter Email'
             style = {styles.TextInputStyle}
             value = {textInputEmail}
             onChangeText={(value) => {setEmail(value)}}
            />

            <Text>{'\n'}</Text>

            <button 
             title='SUBMIT'
             onPress={() => {checkTextInput()}}
            />
        </view>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,  
    }, 
    textInputStyle: {
        width: 450, 
        height: 40,
        paddinghorizontal: 5,
        borderWidth: 0.5,
        marginTop: 15,
    }
});