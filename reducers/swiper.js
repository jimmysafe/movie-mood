export const initState = {
    movies: [],
    loading: false,
    error: ""
  };
  
const tabReducer = (state = initState, action) => {
    switch (action.type) {

        case "FETCH_MOVIES_REQUEST":
            return {
                ...state,
                loading: true
            };

        case "FETCH_MOVIES_SUCCESS":
            return {
                ...state,
                movies: action.movies,
                loading: false
            };

        case "FETCH_MOVIES_FAILED":
            return {
                ...state,
                error: action.error,
                loading: false
            };
        
        default:
            return state;
        }
    };

export default tabReducer;
  