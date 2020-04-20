import React, { useEffect, useState } from 'react'
import { StyleSheet, View, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import { API_KEY } from 'react-native-dotenv'
import { Title } from '../styles'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { fetchGenre, resetData } from '../actions'
import TabNav from './TabNav'


let width = Dimensions.get('window').width; 

const GenreList = (props) => {
    const { navigation } = props
    const dispatch = useDispatch()
    const [genres, setGenres] = useState([])
    useEffect(() => {
        (async() => {
            let res = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
            setGenres(res.data.genres)
        })()
    }, [])

    const handleSelection = async(id) => {
        await dispatch(resetData())
        await dispatch(fetchGenre(id))
        navigation.push('MovieList')
    }

    return (
        <>
        <View style={{ flex: 1, paddingTop: 20, paddingBottom: 5,  backgroundColor: '#313131', alignItems: "center" }}>
            <FlatList
                style={{ width, marginTop: 30 }}
                data={genres && genres}
                renderItem={({item}) => (
                    <TouchableOpacity style={styles.item} onPress={() => handleSelection(item.id)}>
                        <Title>{item.name}</Title>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
        <TabNav {...props}/>
        </>
    )
}

const styles = StyleSheet.create({
    item: {
        marginVertical: 10,
        paddingVertical: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        marginHorizontal: 50
    }
})

export default GenreList
