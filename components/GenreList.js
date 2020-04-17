import React, { useEffect, useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { API_KEY } from 'react-native-dotenv'
import { Title } from '../styles'
import axios from 'axios'
import { useDispatch } from 'react-redux'

const GenreList = (props) => {
    const { navigate } = props.navigation
    const dispatch = useDispatch()
    const [genres, setGenres] = useState([])
    useEffect(() => {
        (async() => {
            let res = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`)
            setGenres(res.data.genres)
        })()
    }, [])

    console.log(genres)

    return (
        <View style={{ flex: 1, paddingVertical: 20, backgroundColor: '#313131', alignItems: "center" }}>
            <FlatList
                data={genres && genres}
                renderItem={({item}) => (
                    <View style={styles.item}>
                        <Title>{item.name}</Title>
                    </View>
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
