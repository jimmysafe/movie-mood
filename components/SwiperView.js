import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Swiper from 'react-native-deck-swiper'
import { StyleSheet, Text, View, Platform, Button } from 'react-native'
import { API_KEY } from 'react-native-dotenv'
import CardView from './CardView'
import SwiperButtons from './SwiperButtons.js'
import MovieTab from './MovieTab.js'
import ColorLights from './ColorLights'

const SwiperView = ({ navigation }) =>  {
  const [cards, setCards] = useState([])
  const [cardIndex, setCardIndex] = useState(0)
  const [swipedAllCards, setSwipedAllCards] = useState(false)
  const [saved, setSaved] = useState([])
  const [showGreen, setShowGreen] = useState(false)
  const [showRed, setShowRed] = useState(false)

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
      .then(res => setCards(res.data.results))
  }, [])

  const renderCard = (card, index) => {
    if(card){
      return (
        <CardView card={card} />
      )
    }
  };

  const onSwiped = (type) => {
    setCardIndex(cardIndex + 1)
    if(type === "right"){
      let savedMovie = cards[cardIndex]
      setSaved([...saved, savedMovie])
      setShowGreen(false)
    }
    else if(type === "left"){
      setShowRed(false)
    }
  };

  const onSwipedAllCards = () => {
    setSwipedAllCards(true)
  };

  const aborted = () => {
    setShowRed(false)
    setShowGreen(false)
  };

  const swiping = (value) => {
    if(value > 60){
      setShowRed(false)
      setShowGreen(true)
    }
    else if(value < -60){
      setShowRed(true)
      setShowGreen(false)
    }
  };

    return (
        <View style={{ 
          flex: 1
         }}>
            <Swiper
              useViewOverflow={Platform.OS === 'ios'}
              verticalSwipe={false}
              onSwiping={(x) => swiping(x)}
              onSwipedAborted={() => aborted()}
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
              animateCardOpacity={false}
              swipeBackCard={false}
              backgroundColor= {"#313131"}
            >
                        {swipedAllCards && <Text style={{ fontSize: 40}}>Finished!</Text>}
            </Swiper>
            <SwiperButtons cards={cards} cardIndex={cardIndex}/>
            { showRed &&  
              <ColorLights choice="no"/>
            }
            { showGreen && 
              <ColorLights choice="yes"/>
            }
            <MovieTab />
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