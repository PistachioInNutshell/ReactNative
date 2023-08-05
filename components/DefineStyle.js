import {StyleSheet, View, Text} from 'react-native';
import React, {useState} from 'react'
import styles from '../components/styles';

const DefineStyle = () => {
    return (
        <View style={styles.container}>
            <Text style={[styles.title, styles.warning]}> Hello World</Text> 

        </View>

    )
}

export default DefineStyle