import React from 'react'
import { View, Text, Dimensions, Button, ScrollView, Image, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import {closeTab} from '../actions'
import { Title, Badge } from '../styles'
import ActorsSlider from './ActorsSlider'

import * as Animatable from 'react-native-animatable';
const AnimatedView = Animatable.createAnimatableComponent(ScrollView);

const MovieTab = () => {

    const dispatch = useDispatch()

    const movie = useSelector(state => state.tab.movie)
    const cast = useSelector(state => state.tab.cast)
    const open = useSelector(state => state.tab.open)

    let height = Dimensions.get('window').height; 
    let width = Dimensions.get('window').width; 

    return (
            <AnimatedView 
                transition="bottom"
                duration={500}
                style={{
                    position: "absolute",
                    bottom: open ? 0 : -height,
                    left: 0,
                    width,
                    height: height - 120,
                    padding: 10
                }}
            >
                <View style={{ flex: 1, backgroundColor: "white", borderTopLeftRadius: 15, borderTopRightRadius: 15  }}>
                    {/* TOP IMAGE */}
                    <View style={{ overflow: "hidden", borderTopLeftRadius: 15, borderTopRightRadius: 15, height: 100 }}>
                        <Image 
                            resizeMode="cover"
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                            }}
                            source={{ uri: `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` }}
                        /> 
                    </View>
                    {/* TITLE */}
                    <Title style={{
                        paddingVertical: 10
                    }}>{movie.title}</Title>
                    {/* GENRES LABELS */}
                    <View style={{
                        paddingVertical: 10,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        flexWrap: 'wrap'
                    }}>
                        {movie.genres && movie.genres.map(genre => (
                            <Badge key={genre.id} style={{ borderRadius: 20, margin: 3 }}>
                                <Text style={{ color: "white" }}>{genre.name}</Text>
                            </Badge>
                        ))}
                    </View>
                    {/* DESCRIPTION- OVERVIEW */}
                    <View style={{ padding: 20 }}>
                        <Text>{movie.overview}</Text>
                    </View>

                    {/* ACTORS SLIDER */}
                    <Title>Cast</Title>
                    <ActorsSlider cast={cast && cast} />
                    
                
                    <TouchableOpacity
                        onPress={() => {dispatch(closeTab())}}
                        style={{
                            position: "absolute",
                            top: -10,
                            right: -10,
                            padding: 2,
                            backgroundColor: 'white',
                            borderRadius: 50
                        }}
                     >
                        <Image 
                            style={{
                                width: 35, height: 35
                            }}
                            source={require('../assets/close.png')}
                        />
                    </TouchableOpacity>
                </View>
            </AnimatedView>
    )
}

export default MovieTab
