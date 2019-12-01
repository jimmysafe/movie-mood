import tabReducer from "./tab";
import cardsReducer from './swiper'
import favReducer from './favourites'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  tab: tabReducer,
  cards: cardsReducer,
  favs: favReducer
});

export default rootReducer;
