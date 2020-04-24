import React, { useEffect, useState } from 'react'
import FavCardView from './FavCardView'
import { FlatList, View, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { Title, Key, Heading } from '../styles'
import BackButton from './BackButton'
import ScreenLayout from './ScreenLayout'
import TabNav from './TabNav'
import Alert from '../assets/alert.svg'
import { _retrieveData } from '../helpers'

const Favourites = (props) => {
    const favourites = useSelector(state => state.favs.favourites)
    return (
        <>
        <ScreenLayout>
            <BackButton {...props} />
            {favourites.length === 0 ? (
                <View style={styles.placeholder}>
                    <Alert width={40} height={40} />
                    <View style={{ marginTop: 15 }}>
                        <Heading white lineHeight>You have not saved any movie yet.</Heading>
                    </View>
                    <View style={{ paddingHorizontal: 70, marginTop: 15 }}>
                        <Key white>Go back and add some movies to your list of favourites!</Key>
                    </View>
                </View>
            )
            :
            (
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
            )
            }
        </ScreenLayout>
        <TabNav {...props}/>
        </>
    )
}

export default Favourites

const styles = StyleSheet.create({
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
    image: {
        width: 30, 
        height: 30
    },
    placeholder: {
        flex: 1,
        marginTop: 20,
        justifyContent: "center",
        alignItems:'center'
    }
})
