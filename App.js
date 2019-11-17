import React, { useState, useEffect } from 'react'
import SwiperView from './components/SwiperView'
import { View } from 'react-native'
import thunk from 'redux-thunk'
import * as Font from 'expo-font';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

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
    <Provider store={store}>
      <SwiperView fontLoaded={fontLoaded}/>
    </Provider>
  )
}

export default App
