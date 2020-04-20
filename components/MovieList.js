import React, { useState, useRef } from 'react'
import FavCardView from './FavCardView'
import { FlatList, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useScrollToTop } from '@react-navigation/native';
import { Title } from '../styles'
import MovieTab from './MovieTab'
import Youtube from './Youtube'
import { fetchMoreMovies } from '../actions'

const MovieList = ({ navigation }) => {
    const dispatch = useDispatch()
    const scrollViewRef = useRef(null)
    const [page, setPage] = useState(1)
    const cards = useSelector(state => state.cards.data)
    const genreId = useSelector(state => state.cards.genreId)
    const [youtube, setYoutube] = useState(false)

    const changePage = (genreId) => {
        setPage(page + 1)
        //useScrollToTop(scrollViewRef)
        // dispatch(fetchMoreMovies(genreId, page))
    }

    return (
        <ScrollView style={styles.main} ref={scrollViewRef}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
                <Title white left>BACK</Title>
            </TouchableOpacity>
            <FlatList
                columnWrapperStyle={styles.container}
                numColumns={2}
                data={cards}
                renderItem={({ item }) => (
                    <View style={styles.listView}>
                        <FavCardView card={item}/>
                    </View>
                )}
                keyExtractor={item => item.id}
            />
            <TouchableOpacity onPress={() => changePage(genreId)}>
               <Title white>Load More</Title>
            </TouchableOpacity>
            <MovieTab setYoutube={setYoutube}/>
            { youtube && 
            <Youtube youtube={youtube} setYoutube={setYoutube}/>
            }
        </ScrollView>
    )
}

export default MovieList

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
