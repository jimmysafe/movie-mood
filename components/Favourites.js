import React from 'react'
import FavCardView from './FavCardView'
import { FlatList, View, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import BackButton from './BackButton'
import ScreenLayout from './ScreenLayout'

const Favourites = (props) => {
    const { navigation } = props
    const favourites = useSelector(state => state.favs.favourites)

    return (
        <ScreenLayout>
            <BackButton {...props} />
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
        </ScreenLayout>
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
    }
})
