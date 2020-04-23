import React, { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { fetchQueriedMovie } from '../actions'
import BackButton from './BackButton'
import ScreenLayout from './ScreenLayout'
import TabNav from './TabNav'

const Search = (props) => {
    const { navigation } = props
    const dispatch = useDispatch()
    const [query, setQuery] = useState('')

    const handleChange = text => {
        setQuery(text)
    }

    const handleSubmit = async (query) => {
        await dispatch(fetchQueriedMovie(query))
        navigation.push('MovieList', { queried: true })
    }

    return (
        <>
        <ScreenLayout>
                <BackButton {...props}/>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#313131' }}>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Search for a Movie"
                        autoCorrect={false}
                        selectionColor={'#F4442E'}
                        onChangeText={handleChange}
                        onSubmitEditing={() => handleSubmit(query)}
                    />
                </View>
        </ScreenLayout>
        <TabNav {...props}/>
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'red',
        color: 'white',
        fontSize: 22,
        paddingVertical: 5
    }
})

export default Search
