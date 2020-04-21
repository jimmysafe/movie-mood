import React, { useState, useRef, useEffect } from 'react'
import FavCardView from './FavCardView'
import { FlatList, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Title } from '../styles'
import { fetchMoreMovies, resetData } from '../actions'
import Loader from './Loader';
import TabNav from './TabNav'
import BackButton from './BackButton'
import ScreenLayout from './ScreenLayout'

const MovieList = (props) => {
    const { navigation, route } = props

    const dispatch = useDispatch()
    const flatListRef = useRef(null)

    const [page, setPage] = useState(1)
    
    const loading = useSelector(state => state.cards.loading)
    const cards = useSelector(state => state.cards.data)
    const genreId = useSelector(state => state.cards.genreId)

    const isQueried = route.params?.queried

    useEffect(() => {
        if(page > 1){
            dispatch(fetchMoreMovies(genreId, page))
        }
    }, [page])

    const listFooter =  () => {
    return (
        <View style={{ flex: 1, flexDirection:'row', justifyContent:'space-between', alignItems:'center', padding: 20 }}>
            {page !== 1 &&
            <TouchableOpacity onPress={() => setPage(page - 1)}>
                <Title white>Previous Page</Title>
            </TouchableOpacity>
            }
            <TouchableOpacity onPress={() => setPage(page + 1)}>
                <Title white>Next Page</Title>
            </TouchableOpacity>
        </View>
    )}

    if(loading) return <Loader />

    return (
        <ScreenLayout>
            <BackButton {...props}/>
            <FlatList
                ref={flatListRef}
                columnWrapperStyle={styles.container}
                numColumns={2}
                ListFooterComponent={!isQueried ? listFooter : null}
                data={cards}
                renderItem={({ item }) => (
                    <View style={styles.listView}>
                        <FavCardView card={item} {...props} />
                    </View>
                )}
                keyExtractor={item => item.id}
            />
            <TabNav {...props} />
        </ScreenLayout>
    )
}

export default MovieList

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
