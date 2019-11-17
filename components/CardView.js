import React from 'react'
import { Image, StyleSheet, View, Text } from 'react-native'
import { Title, Container, Card } from '../styles'
import StarRating from 'react-native-star-rating';

const CardView = ({ card }) => {
    return (
    <Card>
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
                starStyle={{ margin: 3 }}
                halfStarEnabled= {true}
                fullStarColor="#F4442E"
                emptyStarColor="#F4442E"
            />
        </View>
    </Card>
    )
}

export default CardView

var styles = StyleSheet.create({
    canvas: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    }
  });
