export const initState = {
    data: [],
    loading: false,
    error: ""
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
        
        default:
            return state;
        }
    };

export default cardsReducer;
  