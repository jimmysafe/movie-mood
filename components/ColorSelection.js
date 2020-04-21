import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { Heading, Title, Key } from '../styles'
import BouncingBalls from './BouncingBalls'
import TabNav from './TabNav'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const ColorSelection = (props) => {
    const { navigate } = props.navigation

    return (
        <>
        <View style={styles.container}>
            <BouncingBalls
                amount={7}
                animationDuration={4000}
                minSpeed={200}
                maxSpeed={300}
                minSize={60}
                maxSize={80}
                navigate={navigate}
            />  
            <View style={styles.textContainer}>
                <Heading xl white>Each color represents a mood.</Heading>
                <Title white>Choose the color that you believe represents better how you feel.</Title>
                <Key white>Moodie will recommend you 20 movies </Key>
                <Key white>that you could watch in relation to your current state.</Key>
            </View>
        </View>
        <TabNav {...props}/>
        </>
    )
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        position: 'relative', 
        backgroundColor: "#313131", 
        justifyContent: "center", 
        alignItems: "center" 
    },
    textContainer: {
        zIndex: -1,
        position: 'absolute', 
        top:0, 
        left: 0, 
        height, 
        width, 
        justifyContent: 'center', 
        alignItems: 'center'
    }

})

export default ColorSelection
