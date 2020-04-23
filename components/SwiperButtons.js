import React from 'react'
import { View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import Button from './Button';
import Heart from '../assets/heart.svg'

let width = Dimensions.get('window').width; 

const SwiperButtons = ({ navigate }) => {
    
    return (
        <View style={styles.main}>
            <TouchableOpacity onPress={() => navigate('Favs')}>
                <Heart widht={30} height={30}/>
            </TouchableOpacity>
        </View>
    )
}

export default SwiperButtons

const styles = StyleSheet.create({
    main: {
        position: "absolute", 
        bottom: 0, 
        left: 0, 
        width,
        paddingVertical: 15,
        paddingHorizontal: 30,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-evenly"
    }
})

