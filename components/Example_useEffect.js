import {StyleSheet, Text, View} from 'react-native'
import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Example_useEffect = () => {
    return (
        <View>
            <Text>Example_useEffect</Text>
        </View>
    )
}

export default Example_useEffect

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        fontWeight: bold,
        marginBottom: 20,
    },
    post: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5, 
        borderWidth: 1,
        borderColor: '#CCC',
    },
    postTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
})