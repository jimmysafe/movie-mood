import React from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Title } from '../styles'

const BackButton = (props) => {
    const { navigation } = props
    return (
        <View style={styles.back}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ backgroundColor: props.white ? 'transparent' : '#313131' }}>
                {props.white ? 
                <Title left>BACK</Title>
                :
                <Title white left>BACK</Title>
                }
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    back: {
        paddingHorizontal: 20, 
        paddingVertical: 20
    }
})

export default BackButton
