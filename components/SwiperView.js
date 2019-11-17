import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Swiper from 'react-native-deck-swiper'
import { StyleSheet, Text, View, Platform, Button } from 'react-native'
import data from '../DATA.json'
import { API_KEY } from 'react-native-dotenv'
import CardView from './CardView'
import SwiperButtons from './SwiperButtons.js'
import MovieTab from './MovieTab.js'



const SwiperView = ({ fontLoaded }) =>  {
  const [cards, setCards] = useState([])
  const [cardIndex, setCardIndex] = useState(0)
  const [swipedAllCards, setSwipedAllCards] = useState(false)

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
      .then(res => setCards(res.data.results))
  }, [])

  const renderCard = (card, index) => {
    setCardIndex(index -2 )
    if(card){
      return (
        <CardView card={card} />
      )
    }
  };

  const onSwiped = (type) => {
    // console.log(`on swiped ${type}`)
  }

  const onSwipedAllCards = () => {
    setSwipedAllCards(true)
  };


console.log(cardIndex)

    return (
        <View style={{ 
          flex: 1
         }}>
          {fontLoaded &&
          <>
            <Swiper
              useViewOverflow={Platform.OS === 'ios'}
              verticalSwipe={false}
              onSwiped={() => onSwiped('general')}
              onSwipedLeft={() => onSwiped('left')}
              onSwipedRight={() => onSwiped('right')}
              onTapCard={() => onSwiped('TAPPED')}
              cards={cards}
              cardIndex={cardIndex}
              cardVerticalMargin={80}
              renderCard={renderCard}
              onSwipedAll={onSwipedAllCards}
              stackSize={3}
              stackSeparation={20}
              overlayLabels={{
                left: {
                  title: 'SEEN',
                  style: {
                    label: {
                      backgroundColor: 'red',
                      borderColor: 'red',
                      color: 'white',
                      borderWidth: 1
                    },
                    wrapper: {
                      flexDirection: 'column',
                      alignItems: 'flex-end',
                      justifyContent: 'flex-start',
                      marginTop: 30,
                      marginLeft: -30
                    }
                  }
                },
                right: {
                  title: 'LIKE',
                  style: {
                    label: {
                      backgroundColor: 'green',
                      borderColor: 'green',
                      color: 'white',
                      borderWidth: 1
                    },
                    wrapper: {
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      justifyContent: 'flex-start',
                      marginTop: 30,
                      marginLeft: 30
                    }
                  }
                }
              }}
              animateOverlayLabelsOpacity={true}
              animateCardOpacity
              swipeBackCard
              backgroundColor= {'#313131'}
            >
                        {swipedAllCards && <Text style={{ fontSize: 40}}>Finished!</Text>}
            </Swiper>
            <SwiperButtons cards={cards} cardIndex={cardIndex}/>
            <MovieTab />
          </>
          }
      </View>
    )
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1
  },
  card: {
    flex: 1,
    borderRadius: 15,
    justifyContent: 'center',
    backgroundColor: 'white',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.7,
    // shadowRadius: 2,
    // elevation: 1,
    borderWidth: 2,
    borderColor: '#E8E8E8'
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent'
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent'
  }
})

export default SwiperView