import React, { useState } from 'react'
import FavCardView from './FavCardView'
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { Title } from '../styles'

const Favourites = (props) => {
    const { navigation } = props
    const favourites = useSelector(state => state.favs.favourites)

    return (
        <View style={styles.main}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
                <Title white left>BACK</Title>
            </TouchableOpacity>
            <FlatList
                columnWrapperStyle={styles.container}
                numColumns={2}
                data={favourites}
                renderItem={({ item }) => (
                    <View style={styles.listView}>
                        <FavCardView card={item} {...props}/>
                    </View>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Favourites

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#313131",
    },
    container: {
        flex: 1,
        marginTop:20,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: "space-around",
        flexDirection: "row"
    },
    listView: {
        padding: 4,
        height: 350,
        flex: 1
    },
    back: {
        paddingHorizontal: 20, 
        marginTop: 50,
        marginBottom: 10,
    },
    image: {
        width: 30, 
        height: 30
    }
})
