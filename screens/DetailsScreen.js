import {Text, View, Button, } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const DetailsScreen = ({navigation}) => {
  return(
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>{'\n'}</Text>
      <Button 
       title = 'Go to Details...Again'
       onPress={()=>navigation.push('Details')}
      />
      <Button 
       title = 'Go to home'
       onPress={()=>navigation.navigate('Home')}
      />
      <Button 
       title = 'Go back'
       onPress={()=>navigation.goBack()} 
      />
    </View>
  )
}

const Stack = createNativeStackNavigator();

export default DetailsScreen