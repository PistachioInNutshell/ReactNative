import {StyleSheet, View, Text, Button} from "react-native";
import React, {useState} from 'react'

const IncrementCounter = () => {

    const [age, setAge] = useState(23);

    const increment = () => {
        setAge(a => a + 1);
    }

    return(
        <view style={styles.container}>

            <text style={{fontSizeL:24,fontStyle: 'bold'}}>
             Your age: {age}
            </text>

            <text>{'\n'}</text>
            
            <Button
            title='+3'
            onPress={()=>{
                increment();
                increment();
                increment();}}/>
           <Button/>

            <Button
             title='+1'
             onPress={()=>{
                increment()}}/>
            <Button/>
        </view>
    )
}

export default IncrementCounter

const styles = StyleSheet.create({});