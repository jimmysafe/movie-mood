import React from 'react'
import { View, Button, Text, Dimensions, TouchableOpacity, Image } from 'react-native'
import { useDispatch } from 'react-redux'
import { fetchMovie } from '../actions'

const SwiperButtons = ({ cards, cardIndex }) => {

    const dispatch = useDispatch()

    let width = Dimensions.get('window').width; //full width

    return (
        <View style={{ 
                position: "absolute", 
                bottom: 0, 
                left: 0, 
                width,
                paddingVertical: 15,
                paddingHorizontal: 30,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center"
            }}>
            <TouchableOpacity onPress={() => {dispatch(fetchMovie(cards[cardIndex].id))}} style={{
                backgroundColor: 'white',
                padding: 2,
                borderRadius: 50
            }}>
                <Image 
                    style={{ width: 30, height: 30 }}
                    source= {require('../assets/info.png')}
                />
            </TouchableOpacity>

        </View>
    )
}

export default SwiperButtons
