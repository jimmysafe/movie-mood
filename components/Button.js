import React from 'react'
import { StyleSheet, TouchableOpacity, Image } from 'react-native'

const Button = ({ action, imgSource }) => {
    return (
        <TouchableOpacity onPress={action} style={styles.button}>
            <Image 
                style={styles.image}
                source= {imgSource}
            />
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        padding: 2,
        borderRadius: 50
    },
    image: {
        width: 30, 
        height: 30
    }
})
