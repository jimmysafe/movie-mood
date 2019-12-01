import React, { useState, useEffect } from 'react'
import Swiper from 'react-native-deck-swiper'
import { Text, View, Platform } from 'react-native'
import CardView from './CardView'
import SwiperButtons from './SwiperButtons.js'
import MovieTab from './MovieTab.js'
import ColorLights from './ColorLights'
import { fetchMovies, addToFav } from '../actions'
import { useSelector, useDispatch } from 'react-redux'

const SwiperView = ({ navigation }) =>  {
  const dispatch = useDispatch()
  const movies = useSelector(state => state.cards.data)

  const [cards, setCards] = useState([])
  const [cardIndex, setCardIndex] = useState(0)
  const [swipedAllCards, setSwipedAllCards] = useState(false)
  const [showGreen, setShowGreen] = useState(false)
  const [showRed, setShowRed] = useState(false)

  useEffect(() => {
    dispatch(fetchMovies(navigation.state.params.color))
  }, [])
  
  useEffect(() => {
    setCards(movies)
  }, [movies])

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
      dispatch(addToFav(savedMovie))
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
            <SwiperButtons cards={cards} cardIndex={cardIndex} navigate={navigation.navigate}/>
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


export default SwiperView