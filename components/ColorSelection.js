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
                <Heading xl white lineHeight>choose a </Heading>
                <Heading xl white lineHeight>color.</Heading>
                <View style={{ paddingHorizontal: 70, marginVertical: 20 }}>
                    <Title white>Moodie will choose 20 movies for your feels</Title>
                </View>
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
