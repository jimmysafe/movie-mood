import React from 'react'
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import { Title } from '../styles'
import StarRating from 'react-native-star-rating';
import { fetchMovie } from '../actions'
import { useDispatch } from 'react-redux';

const FavCardView = ({ card }) => {
    const dispatch = useDispatch()
    return (
    <TouchableOpacity style={styles.touchable} onPress={() => dispatch(fetchMovie(card.id))}>
        <View style={{ flex: 9, overflow: "hidden", borderTopLeftRadius: 15, borderTopRightRadius: 15, }}>
            <Image 
                resizeMode="cover"
                style={styles.canvas}
                source={{ uri: `https://image.tmdb.org/t/p/w500${card.poster_path}` }}
            /> 
        </View>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", paddingBottom: 10, paddingTop: 10 }}>
            <Title>{card.title}</Title>
            <StarRating 
                disabled={true}
                maxStars={5}
                rating={card.vote_average / 2}
                starSize={15}
                starStyle={{ marginHorizontal: 3 }}
                halfStarEnabled= {true}
                fullStarColor="#F4442E"
                emptyStarColor="#F4442E"
            />
        </View>
    </TouchableOpacity>
    )
}

export default FavCardView

var styles = StyleSheet.create({
    canvas: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    touchable: {
        flex: 10,
        borderRadius: 15,
        justifyContent: 'center',
        backgroundColor: 'white',
        // shadowColor: '#000',
        // shadowOffset: '0px 1px',
        // shadowOpacity: 0.4,
        // shadowRadius: 5,
        elevation: 5
    }
  });
