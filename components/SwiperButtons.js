import React from 'react'
import { View, Dimensions, StyleSheet } from 'react-native'
import Button from './Button';

let width = Dimensions.get('window').width; 

const SwiperButtons = ({ navigate }) => {
    
    return (
        <View style={styles.main}>
            <Button 
                action={() => navigate('Favs')}
                imgSource={require('../assets/favourites.png')}
            />
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

