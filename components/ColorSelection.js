import React from 'react'
import { View, TouchableOpacity } from 'react-native'

const ColorSelection = (props) => {
    const { navigate } = props.navigation
    const moods = [
        { color: "red", hex: "#e81d18" },
        { color: "pink", hex: "#fdc9de" },
        { color: "orange", hex: "#f9711a" },
        { color: "yellow", hex: "#fee316" },
        { color: "green", hex: "#25725f" },
        { color: "blue", hex: "#38a1c1" },
        { color: "purple", hex: "#685ab2" }
    ]
    return (
        <View style={{ flex: 1, backgroundColor: "#313131", justifyContent: "center", alignItems: "center" }}>
            {moods.map(mood => (
                <TouchableOpacity 
                key={mood.color}
                onPress={() => navigate('Swiper', { color: mood.color})}
                style={{
                    width: 60,
                    height: 60,
                    borderRadius: 50,
                    backgroundColor: mood.hex,
                    margin: 10
                }}
                ></TouchableOpacity>
            ))}
        </View>
    )
}

export default ColorSelection
