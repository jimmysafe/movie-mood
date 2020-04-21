import React from 'react'
import { View, Platform, StatusBar } from 'react-native'

const ScreenLayout = (props) => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: props.white ? 'white' : '#313131',
            paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
        }}>
            {props.children}
        </View>
    )
}

export default ScreenLayout
