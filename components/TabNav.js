import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import { Key } from '../styles'
import Moon from '../assets/moon.svg'
import Fav from '../assets/heart.svg'
import List from '../assets/list.svg'
import Search from '../assets/search.svg'
let width = Dimensions.get('window').width; 

const navItems = [
    { href: 'Home', icon: () => <Moon width={20} />, text: 'Moodie' },
    { href: 'Favs', icon: () => <Fav width={20}  />, text: 'Favourites' },
    { href: 'Genres', icon: () => <List width={20} />, text: 'Genres' },
    { href: 'Search', icon: () => <Search width={20} />, text: 'Search' },
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
            {navItems.map(item => {
                let isActive = props.route.name === item.href
                return (
                    <TouchableOpacity style={[styles.item, isActive && styles.active]} key={item.text} onPress={() => emitNavigation(item.href)} >
                        {item.icon()}
                        <Key nav white>{item.text}</Key>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    tab: {
        width,
        height: 50, 
        backgroundColor: '#252525',
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: "center"
    },

    item: {
        flex: 1,
        height: 50,
        justifyContent: "center",
        alignItems: 'center'
    },

    active: {
        backgroundColor:'#353535'
    }
})

export default TabNav
