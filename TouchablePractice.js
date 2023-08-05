import {
  StyleSheet, 
  Text, 
  View,
  SafeAreaView,
  Alert,
  Button
  } from 'react-native'
import React from 'react'
import styles from './components/Styles'

const TouchableRecap  = () => {

  return (
      <View style = {styles.container}>
          <TouchableOpacity 
           style = {styles.buttonFacebookStyle}
          >
              <image 
                  source={require("D:\ReactNative\assets\facebook.png")}
                  style={style.buttonImageIconStyle}
              />
              <View style={styles.buttonIconSeparatorStyle}/>
              <Text style={styles.buttonTextStyle}>Login Using Facebook</Text>
          </TouchableOpacity>


          <TouchableOpacity
           style = {styles.buttonGPlusStyle}
          >
              <image 
              source={require("D:\ReactNative\assets\google-plus.png")}
              style={style.buttonImageIconStyle}
              />
              <View style={styles.buttonIconSeparatorStyle}/>
              <Text style={styles.buttonTextStyle}>Login Using Google Plus</Text>
          </TouchableOpacity>
      </View>

  )
}

export default TouchableRecap

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10, 
    marginTop: 30,    
    padding: 30,
  },
  buttonGPlusStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dc4e41',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  buttonFacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#485a96',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginLeft: 10,
  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  }
})