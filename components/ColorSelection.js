import React from 'react'
import { View } from 'react-native'
import BouncingBalls from './BouncingBalls'
import TabNav from './TabNav'

const ColorSelection = (props) => {
    const { navigate } = props.navigation

    return (
        <>
        <View style={{ flex: 1, backgroundColor: "#313131", justifyContent: "center", alignItems: "center" }}>
            <BouncingBalls
                amount={7}
                animationDuration={4000}
                minSpeed={200}
                maxSpeed={300}
                minSize={110}
                maxSize={140}
                navigate={navigate}
            />  
        </View>
        <TabNav {...props}/>
        </>
    )
}

export default ColorSelection
