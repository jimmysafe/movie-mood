import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

let width = Dimensions.get('window').width; 

const navItems = [
    { href: 'Home', icon: '', text: 'Moodie' },
    { href: 'Favs', icon: '', text: 'Favourites' },
    { href: 'Genres', icon: '', text: 'Genres' },
    { href: 'Search', icon: '', text: 'Search' },
]

const TabNav = (props) => {
    const { navigation, route } = props

    const emitNavigation = (href) => {
        if(route?.name === href ){
            console.log('Already on this route')
            return
        }
        navigation.push(href)
    }


    return (
        <View style={styles.tab}>
            {navItems.map(item => (
                <TouchableOpacity key={item.text} onPress={() => emitNavigation(item.href)}>
                    <Text>{item.text}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    tab: {
        width,
        height: 50, 
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: "center"
    }
})

export default TabNav
