import React from 'react'
import { View, Dimensions, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { fetchMovie } from '../actions'
import Button from './Button';

let width = Dimensions.get('window').width; //full width

const SwiperButtons = ({ cards, cardIndex, navigate }) => {
    
    const dispatch = useDispatch()
    const fetch = () => {
        dispatch(fetchMovie(cards[cardIndex].id))
    }


    return (
        <View style={styles.main}>
            <Button 
                action={() => console.log("shuffle")}
                imgSource={require('../assets/shuffle.png')}
            />
            <Button 
                action={() => fetch()}
                imgSource={require('../assets/info.png')}
            />
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

