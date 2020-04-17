import React from 'react'
import { StyleSheet, Dimensions, View, TouchableOpacity } from 'react-native'
import { Heading, Title } from '../styles'

let height = Dimensions.get('window').height; 
let width = Dimensions.get('window').width;

const FinishedSwipe = (props) => {
    const { navigate } = props.navigation
    return (
        <View style={{ flex: 1, width, height, backgroundColor: "#313131", justifyContent: "center", alignItems: "center", padding: 20 }}>
            <Heading xl>congrats!</Heading>
            <Heading>You Swiped all Cards</Heading>
            <View style={{ paddingVertical:50 }}>
                <View style={{ marginBottom: 15 }}>
                    <Title white>choose your next step</Title>
                </View>
                <View>
                    <TouchableOpacity style={styles.button} onPress={() => navigate('Home')}>
                        <Title>Restart</Title>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigate('Favs')}>
                        <Title>View Saved</Title>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigate('Genres')}>
                        <Title>Browse By Category</Title>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        marginVertical: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'white',
        width: 230,
        borderRadius: 20
    }
})

export default FinishedSwipe
