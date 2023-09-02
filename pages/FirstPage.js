import {Text, View, Button, StyleSheet} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const FirstPage = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Text style={styles.textStyle}>This is the First Page of the app</Text>
      <Text>{'\n'}</Text>
      <Button 
       title = 'Go to second page'
       onPress={()=>navigation.navigate('SecondPage')}
      />
    </View>
  )
}

const Stack = createNativeStackNavigator();

export default FirstPage

const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    },
    textStyle: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 16
    },
});