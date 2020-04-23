import React from 'react'
import { View, Dimensions } from 'react-native'
import Moon from '../assets/moon.svg'
import { Key } from '../styles'

let height = Dimensions.get('window').height; 
let width = Dimensions.get('window').width; 

const Loader = () => {
    return (
        <View style={{ flex: 1, height, width, justifyContent: 'center', alignItems:'center', backgroundColor:'#313131' }}>
           <Moon width={50} height={50}/>
           <View style={{ marginVertical: 15 }}>
            <Key white>Loading..</Key>
           </View>
        </View>
    )
}

export default Loader
