import {StyleSheet, View, Text, Button} from "react-native";
import React, {useState} from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    return(
        <view style={styles.container}>
            <text>{count}</text>
            <Button 
             title='Click me'
             onPress={()=>{setCount(count+1)}}/>
        </view>
    )
}

export default Counter

const styles = StyleSheet.create({});