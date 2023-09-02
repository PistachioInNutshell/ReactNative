import {Text, View, Button, } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'
import FirstPage from './pages/FirstPage'
import SecondPage from './pages/SecondPage'
import ThirdPage from './pages/ThirdPage'


/* function HomeScreen({navigation}){
  return(
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>HomeScreen</Text>
      <Button 
       title = 'Go to Details'
       onPress={()=>navigation.navigate('Details')}
      />
    </View>
  )
}

function DetailsScreen(){
  return(
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>DetailScreen</Text>
    </View>
  )
} */

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='FirstPage'
        screenOptions={{
          headerStyle:{
            backgroundColor:'#5CD67B'
          },
          headerTintColor:'#ffff',
          headerTitleStyle:{
            fontWeight: 'bold',
          }
        }}
      >
        <Stack.Screen 
        name='Home' 
        component={HomeScreen} 
        options={{title:'Overview'}}
        />
        <Stack.Screen 
        name='Details' 
        component={DetailsScreen} 
        />
        <Stack.Screen 
        name='FirstPage' 
        component={FirstPage} 
        options={{title:'Overview'}}
        />
        <Stack.Screen 
        name='SecondPage' 
        component={SecondPage} 
        />
        <Stack.Screen 
        name='ThirdPage' 
        component={ThirdPage} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

