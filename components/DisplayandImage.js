import React from "react";
import {View, Text, Image} from "react-native";

const DisplayandImage = () => {
    return(
        <view style={styles.container}>
            <Image
             style={styles.tinyLogo}
             source={require('../assets/react_logo.png')}
            />
            <image
             style={styles.tinyLogo}
             source={{url:'https://reactnative.dev/img/tiny_logo.png'}}
            />
        </view>
    )
}

export default DisplayandImage

const styles = StyleSheet.create({
    container: {
        flex : 1,
        paddinfTop : 50,
    },
    tinyLogo:{
        width: 50,
        height: 50,
    },
    logo: {
        width: 66,
        height: 58,
    },
});

