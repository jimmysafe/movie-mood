export const initState = {
    favourites: []
  };
  
const favReducer = (state = initState, action) => {
    switch (action.type) {

        case "ADD_TO_FAVOURITES":
            return{
                ...state,
                favourites: [...state.favourites, action.newFav]
            }

        default:
            return state;
        }
    };

export default favReducer;
  