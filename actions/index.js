import axios from "axios";
import { API_KEY } from 'react-native-dotenv'

const openTab = () => {
    return {
        type: "OPEN_TAB"
    }
}

export const closeTab = () => {
    return{
        type: "CLOSE_TAB"
    }
}


const fetchMovieRequest = () => {
    return {
      type: "FETCH_MOVIE_REQUEST"
    };
  };
  
const fetchMovieSuccess = (movie, cast) => {
    return {
        type: "FETCH_MOVIE_SUCCESS",
        movie,
        cast
    };
};

const fetchMovieFailed = error => {
    return {
        type: "FETCH_MOVIE_FAILED",
        payload: error
    };
};

export const fetchMovie = (id) => {
    return async dispatch => {
        try {
            dispatch(fetchMovieRequest());
            let res = await axios.all([
                axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`),
                axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`),
            ])
            const movie = res[0].data
            const cast = res[1].data.cast
            dispatch(fetchMovieSuccess(movie, cast));
            dispatch(openTab())
        }
        catch(err){
            dispatch(fetchMovieFailed(err));
        }
    };
};
