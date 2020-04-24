import { createReducer } from "@reduxjs/toolkit";
import { _storeData, _retrieveData } from '../helpers'

export const initState = {
    favourites: [],
    init: false
  };
  

const favReducer = createReducer(initState, {
    INIT_FAVOURITES: (state, action) => {
        state.favourites = action.storedFavs
        state.init = true
    },

    ADD_TO_FAVOURITES: (state, action) => {
        state.favourites.push(action.newFav)
        _storeData('favs', state.favourites)
    }
});

export default favReducer;
  