import React, { useState, useEffect } from 'react'
import Swiper from 'react-native-deck-swiper'
import { View, Platform, Dimensions } from 'react-native'
import CardView from './CardView'
import SwiperButtons from './SwiperButtons.js'
import ColorLights from './ColorLights'
import { fetchMovies, addToFav } from '../actions'
import { useSelector, useDispatch } from 'react-redux'
import Loader from './Loader'
//import Reactotron from 'reactotron-react-native'

const SwiperView = ({ navigation, route }) =>  {
  const dispatch = useDispatch()
  const cards = useSelector(state => state.cards.data)  
  const loading = useSelector(state => state.cards.loading) 

  const [cardIndex, setCardIndex] = useState(0)
  const [showGreen, setShowGreen] = useState(false)
  const [showRed, setShowRed] = useState(false)


  useEffect(() => {
    if(route.params){
      dispatch(fetchMovies(route.params.color))
    }
  }, [])

  const renderCard = (card, index) => {
    if(card){
      return (
        <CardView card={card} />
      )
    }
  };

  if(loading) return <Loader />

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
      navigation.push('Movie', { movieId: cards[cardIndex].id})
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

    return (
          <View style={{flex: 1}}>
              <Swiper
                useViewOverflow={Platform.OS === 'ios'}
                verticalSwipe={false}
                onSwiping={(x) => swiping(x)}
                onSwipedAborted={() => aborted()}
                onSwipedLeft={() => onSwiped('left')}
                onSwipedRight={() => onSwiped('right')}
                onTapCard={() => onSwiped('tap')}
                onSwipedAll={() => {navigation.push('Finished')}}
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
        </View>
    )
}


export default SwiperView