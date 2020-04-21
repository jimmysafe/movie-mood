import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react'
import SwiperView from './components/SwiperView'
import ColorSelection from './components/ColorSelection'
import Favourites from './components/Favourites'
import GenreList from './components/GenreList'
import FinishedSwipe from './components/FinishedSwipe'
import MovieList from './components/MovieList'
import Movie from './components/Movie'
import Search from './components/Search'

import thunk from 'redux-thunk'
import * as Font from 'expo-font';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import Reactotron from './ReactotronConfig'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

const store = createStore(rootReducer, compose(applyMiddleware(thunk), Reactotron.createEnhancer()));


const Stack = createStackNavigator();


const noHeader = { headerShown: false }



const _App = () => {
  return (
    <Provider store={store}>
       <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            ...TransitionPresets.SlideFromRightIOS
          }}
        >
          <Stack.Screen name="Home" component={ColorSelection} options={noHeader} />
          <Stack.Screen name="Swiper" component={SwiperView} options={noHeader}/>
          <Stack.Screen name="Genres" component={GenreList} options={noHeader}/>
          <Stack.Screen name="Favs" component={Favourites} options={noHeader}/>
          <Stack.Screen name="Finished" component={FinishedSwipe} options={noHeader}/>
          <Stack.Screen name="MovieList" component={MovieList} options={noHeader}/>
          <Stack.Screen name="Movie" component={Movie} options={noHeader}/>
          <Stack.Screen name="Search" component={Search} options={noHeader}/>
        </Stack.Navigator>
       </NavigationContainer>
    </Provider>
  )
}

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false)
  
  const loadFonts = async() => {
    await Font.loadAsync({
      'montserrat-medium': require('./assets/fonts/Montserrat-Medium.ttf'),
      'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
      'montserrat-light': require('./assets/fonts/Montserrat-Light.ttf'),
    });
    setFontLoaded(true)
  }
  
  useEffect(() => {
    loadFonts()
  }, [])

  return (
    <>
    {fontLoaded && <_App /> }
    </>
  )
}

export default App
