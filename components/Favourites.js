import React from 'react'
import CardView from './CardView'
import { FlatList, View, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

const Favourites = () => {
    
    const favourites = useSelector(state => state.favs.favourites)

    return (
        <View style={styles.main}>
            <FlatList
                columnWrapperStyle={styles.container}
                numColumns={2}
                data={favourites}
                renderItem={({ item }) => (
                    <View style={styles.listView}>
                        <CardView card={item}/>
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
    }
})
