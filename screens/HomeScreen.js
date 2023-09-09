import {Text, View, Button, } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const HomeScreen = ({navigation}) => {

  return(

    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>      
      <Text>{'\n'}</Text>
      <Button 
       title = 'Go to Details'
       onPress={() => {
        // 1. Navigate to the Details route with params
        navigation.navigate('Details', {
          itemId : 1088, 
          otherParam : 'React Native App'
        })
       }}
      />
    </View>

  )

}

const Stack = createNativeStackNavigator();

export default HomeScreen