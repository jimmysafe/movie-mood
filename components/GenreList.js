import React, { useEffect, useState } from 'react'
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native'
import { API_KEY } from 'react-native-dotenv'
import { Title } from '../styles'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { fetchGenre } from '../actions'

const GenreList = ({ navigation }) => {
    const dispatch = useDispatch()
    const [genres, setGenres] = useState([])
    useEffect(() => {
        (async() => {
            let res = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
            setGenres(res.data.genres)
        })()
    }, [])

    const handleSelection = async(id) => {
        // dispatch action to replace cards
        await dispatch(fetchGenre(id))
        navigation.replace('Swiper')
        // redirect
    }

    return (
        <View style={{ flex: 1, paddingVertical: 20, backgroundColor: '#313131', alignItems: "center" }}>
            <FlatList
                data={genres && genres}
                renderItem={({item}) => (
                    <TouchableOpacity style={styles.item} onPress={() => handleSelection(item.id)}>
                        <Title>{item.name}</Title>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        marginVertical: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        width: 230
    }
})

export default GenreList
