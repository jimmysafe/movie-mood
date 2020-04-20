export const initState = {
    open: false,
    movie: {},
    cast: [],
    loading: false,
    error: "",
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
                ...state,
                loading: true
            };

        case "FETCH_MOVIE_SUCCESS":
            return {
                ...state,
                loading: false,
                movie: action.movie,
                cast: action.cast
            };

        case "FETCH_MOVIE_FAILED":
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        
        default:
            return state;
        }
    };

export default tabReducer;
  