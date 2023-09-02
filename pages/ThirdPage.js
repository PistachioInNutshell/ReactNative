import {Text, View, Button, StyleSheet} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const ThirdPage = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Text style = {styles.textStyle}>This is Third Page of the App</Text>
      <Text>{'\n'}</Text>
      <Button 
       title = 'Go Back'
       onPress={()=>navigation.goBack()}
      />
      <Button 
       title = 'Go to Second Page'
       onPress={()=>navigation.navigate('SecondPage')}
      />
      <Button 
       title = 'Reset navigator to first page'
       onPress={()=>navigation.navigate('FirstPage')}
      />
    </View>
  )
}

const Stack = createNativeStackNavigator();

export default ThirdPage

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