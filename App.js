import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ViewBoxesWithColorAndText from './components/ViewBoxesWithColorAndText';
import Cat from './components/Cat';
import DisplayandImage from './components/DisplayandImage';
import LotsOfGreeting from './components/LotsOfGreeting';
import CustomText from './components/CustomText';
import Counter from './components/Counter';
import MyInput from './components/MyInput';
import IncrementCounter from './components/IncrementCounter';
import Form from './components/Form';

export default function App() {
  return (
    <View style = {style.container}>
      {/* <ViewBoxesWithColorAndtext/> */}
      {/* <DisplayandImage/> */}
      {/* <LotsOfGreeting/> */}
      {/* <CustomText/> */}
      {/* <CustomText/> */}
      {/* <Counter/> */}
      {/* <MyInput/> */}
      {/* <IncrementCounter/> */}
      <Form/>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
       flex:1,   
       justifyContent:'center',    
       alignItems:'center'   
    }
   })