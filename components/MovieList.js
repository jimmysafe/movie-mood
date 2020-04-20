import React, { useState, useRef, useEffect } from 'react'
import FavCardView from './FavCardView'
import { FlatList, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { Title } from '../styles'
import MovieTab from './MovieTab'
import Youtube from './Youtube'
import { fetchMoreMovies, resetData } from '../actions'
import Loader from './Loader';

const MovieList = ({ navigation }) => {
    const dispatch = useDispatch()
    const flatListRef = useRef(null)

    const [page, setPage] = useState(1)
    const [youtube, setYoutube] = useState(false)
    
    const loading = useSelector(state => state.cards.loading)
    const cards = useSelector(state => state.cards.data)
    const genreId = useSelector(state => state.cards.genreId)

    useEffect(() => {
        dispatch(fetchMoreMovies(genreId, page))
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
        <View style={styles.main}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}>
                <Title white left>BACK</Title>
            </TouchableOpacity>
            <FlatList
                ref={flatListRef}
                columnWrapperStyle={styles.container}
                numColumns={2}
                ListFooterComponent={listFooter}
                data={cards}
                renderItem={({ item }) => (
                    <View style={styles.listView}>
                        <FavCardView card={item}/>
                    </View>
                )}
                keyExtractor={item => item.id}
            />
            <MovieTab setYoutube={setYoutube}/>
            { youtube && 
            <Youtube youtube={youtube} setYoutube={setYoutube}/>
            }
        </View>
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
