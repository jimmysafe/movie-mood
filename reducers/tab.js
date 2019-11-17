export const initState = {
    open: false,
    movie: {},
    cast: [],
    error: ""
  };
  
const tabReducer = (state = initState, action) => {
    switch (action.type) {

        case "OPEN_TAB":
            return {
                ...state,
                open: true
            };

        case "CLOSE_TAB":
            return {
                ...state,
                open: false
            };

        case "FETCH_MOVIE_REQUEST":
            return {
                ...state
            };

        case "FETCH_MOVIE_SUCCESS":
            return {
                ...state,
                movie: action.movie,
                cast: action.cast
            };

        case "FETCH_MOVIE_FAILED":
            return {
                ...state,
                error: action.payload
            };
        
        default:
            return state;
        }
    };

export default tabReducer;
  