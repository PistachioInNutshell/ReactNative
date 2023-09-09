import {Text, View, Button, } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const DetailsScreen = ({route, navigation}) => {

  // 2. Get the params
  const {itemId, otherParam} = route.params;

  return(

    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>ohterParam: {JSON.stringify(ohterParam)}</Text>

      <Text>{'\n'}</Text>
      <Button 
       title = 'Go to Details...Again'
       onPress={()=>navigation.push('Details', {
        itemId : Math.floor(Math.random() * 100),
        otherParam : 'anything you want here'
       })
      }
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