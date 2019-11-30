import React, { useState, useEffect } from 'react'
import SwiperView from './components/SwiperView'
import ColorSelection from './components/ColorSelection'

import thunk from 'redux-thunk'
import * as Font from 'expo-font';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const store = createStore(rootReducer, applyMiddleware(thunk));

const MainNavigator = createStackNavigator({
  Home: {screen: ColorSelection,
    navigationOptions: {
      header: null
    }},
  Swiper: {screen: SwiperView, 
    navigationOptions: {
      header: null
    }
  }
});

const Root = createAppContainer(MainNavigator);

const _App = () => {
  return (
    <Provider store={store}>
      <Root />
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
