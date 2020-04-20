import React from 'react'
import { View, Dimensions } from 'react-native'
import { Title } from '../styles'

let height = Dimensions.get('window').height; 
let width = Dimensions.get('window').width; 

const Loader = () => {
    return (
        <View style={{ flex: 1, height, width, justifyContent: 'center', alignItems:'center', backgroundColor:'#313131' }}>
            <Title white>Loading...</Title>
        </View>
    )
}

export default Loader
