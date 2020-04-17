import React, { useState, useEffect, useRef } from 'react'
import Swiper from 'react-native-deck-swiper'
import { Text, View, Platform, TouchableOpacity } from 'react-native'
import CardView from './CardView'
import SwiperButtons from './SwiperButtons.js'
import MovieTab from './MovieTab.js'
import ColorLights from './ColorLights'
import { fetchMovies, addToFav, fetchMovie } from '../actions'
import { useSelector, useDispatch } from 'react-redux'
import Youtube from './Youtube'
import FinishedSwipe from './FinishedSwipe'
import Reactotron from 'reactotron-react-native'

const SwiperView = ({ navigation }) =>  {
  const dispatch = useDispatch()
  const cards = useSelector(state => state.cards.data)  

  const [cardIndex, setCardIndex] = useState(0)
  const [showGreen, setShowGreen] = useState(false)
  const [showRed, setShowRed] = useState(false)
  const [youtube, setYoutube] = useState(false)

  useEffect(() => {
    dispatch(fetchMovies(navigation.state.params.color))
  }, [])

  useEffect(() => {
    if(cardIndex + 1 === cards.length){
      setTimeout(() => navigation.navigate('Finished'), 700)
    }
  }, [cardIndex])
 
  const renderCard = (card, index) => {
    if(card){
      return (
        <CardView card={card} />
      )
    }
  };

  const onSwiped = (type) => {
    if(type === "right"){
      setCardIndex(cardIndex + 1)
      let savedMovie = cards[cardIndex]
      dispatch(addToFav(savedMovie))
      setShowGreen(false)
    }
    else if(type === "left"){
      setCardIndex(cardIndex + 1)
      setShowRed(false)
    }
    else if(type === "tap"){
      Reactotron.log(cards[cardIndex])
      dispatch(fetchMovie(cards[cardIndex].id))
    }
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

  console.log(cardIndex + 1 === cards.length)


    return (
          <View style={{flex: 1}}>
              <Swiper
                useViewOverflow={Platform.OS === 'ios'}
                verticalSwipe={false}
                onSwiping={(x) => swiping(x)}
                onSwipedAborted={() => aborted()}
                onSwipedLeft={() => onSwiped('left')}
                onSwipedRight={() => onSwiped('right')}
                //onTapCard={() => onSwiped('tap')}
                cards={cards && cards}
                cardIndex={cardIndex}
                cardVerticalMargin={80}
                renderCard={renderCard}
                stackSize={3}
                stackSeparation={20}
                animateCardOpacity={false}
                swipeBackCard={false}
                backgroundColor= {"#313131"}
              />
                        
              <SwiperButtons cards={cards} cardIndex={cardIndex} navigate={navigation.navigate}/>
              { showRed &&  
                <ColorLights choice="no"/>
              }
              { showGreen && 
                <ColorLights choice="yes"/>
              }
              <MovieTab setYoutube={setYoutube}/>
              { youtube && 
                <Youtube youtube={youtube} setYoutube={setYoutube}/>
              }
        </View>
    )
}


export default SwiperView