import React from 'react'
import { View, Text } from 'react-native';

const ColorLights = ({ choice }) => {
    return (
        <>
        {choice === "no" &&
        <View style={{ 
            width: 100,
            height: 100,
            backgroundColor: "red",
            borderRadius: 50,
            alignItems: 'center', 
            justifyContent: 'center', 
            position: "absolute", 
            left: 10, 
            top: 40 
        }}>
            <Text style={{
                textTransform: "uppercase",
                fontWeight: "bold",
                color: "white",
                fontSize: 25
            }}>
                Nope
            </Text>
        </View>
        }
        {choice === "yes" &&
        <View style={{ 
            width: 100,
            height: 100,
            backgroundColor: "green",
            borderRadius: 50,
            alignItems: 'center', 
            justifyContent: 'center', 
            position: "absolute", 
            right: 10, 
            top: 40 
        }}>
            <Text style={{
                textTransform: "uppercase",
                fontWeight: "bold",
                color: "white",
                fontSize: 25
            }}>
                Save
            </Text>
        </View>
        }
        </>
    )
}

export default ColorLights
