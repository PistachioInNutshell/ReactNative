import 'react-native-gesture-handler';
import {Text, View, } from 'react-native'
import React from 'react'

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createDrawerNavigator} from '@react-navigation/drawer';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';

import CustomSideBarMenu from './pages/CustomSideBarMenu';

function FirstScreenStack(){
  return(
    <Stack.Navigator
     screenOptions={{
      headerShown:false
     }}
    >
      <Stack.Screen name = 'First Page ' component={FirstPage}/>
    </Stack.Navigator>
  );
}

function SecondScreenStack(){
  return(
    <Stack.Navigator
    screenOptions={{
        headerShown:false
    }}
    >
      <Stack.Screen name = 'Second Page ' component={SecondPage}/>
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function MyDrawer(){
  return(
    <Drawer.Navigator
     screenOptions={{
      drawerStyle: {
        backgroundColor: '#F8F8F8',
        width: 240,
      },
     }}
     drawerContent={(props)=><CustomSideBarMenu {...props}/>}
    >      
     <Drawer.Screen name = 'First Drawer' component={FirstScreenStack} options={{drawerLabel:'First page Option'}}/>
     <Drawer.Screen name = 'Second Drawer' component={SecondScreenStack} options={{drawerLabel:'Second page Option'}}/>
    </Drawer.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
     <MyDrawer/>
    </NavigationContainer>
  )
}

export default App

