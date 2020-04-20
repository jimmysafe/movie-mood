export const initState = {
    data: [],
    loading: false,
    error: "",
    genreId: null
  };
  
const cardsReducer = (state = initState, action) => {
    switch (action.type) {

        case "FETCH_MOVIES_REQUEST":
            return {
                ...state,
                loading: true
            };

        case "FETCH_MOVIES_SUCCESS":
            return {
                ...state,
                data: action.data,
                loading: false
            };

        case "FETCH_MOVIES_FAILED":
            return {
                ...state,
                error: action.error,
                loading: false
            };

        case "FETCH_GENRE_REQUEST":
            return {
                ...state,
                loading: true
            };

        case "FETCH_GENRE_SUCCESS":
            return {
                ...state,
                data: action.data,
                loading: false
            };

        case "FETCH_GENRE_FAILED":
            return {
                ...state,
                error: action.error,
                loading: false
            };

        case 'RESET_DATA':
            return {
                data: [],
                loading: false,
                error: ""
            };

        case 'SET_GENRE_ID':
            return {
                ...state,
                genreId: action.id
            };

        case "LOAD_MORE_MOVIES_REQUEST":
            return {
                ...state,
                loading: true
            };

        case 'LOAD_MORE_MOVIES_SUCCESS':
            return {
                ...state,
                data: action.data,
                loading: false
            };

        case "LOAD_MORE_MOVIES_FAILED":
            return {
                ...state,
                error: action.error,
                loading: false
            };


        default:
            return state;
        }
    };

export default cardsReducer;
  