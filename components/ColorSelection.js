import React from 'react'
import { View } from 'react-native'
import BouncingBalls from './BouncingBalls'

const ColorSelection = (props) => {
    const { navigate } = props.navigation

    return (
        <View style={{ flex: 1, backgroundColor: "#313131", justifyContent: "center", alignItems: "center" }}>
            <BouncingBalls
                amount={7}
                animationDuration={5000}
                minSpeed={30}
                maxSpeed={200}
                minSize={60}
                maxSize={120}
                navigate={navigate}
            />  
        </View>
    )
}

export default ColorSelection
