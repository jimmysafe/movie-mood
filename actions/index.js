import axios from "axios";
import { API_KEY } from 'react-native-dotenv'

/**
|--------------------------------------------------
| OPENS AND CLOSE INFO MOVIE TAB IN THE SWIPER
|--------------------------------------------------
*/

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

/**
|--------------------------------------------------
| FETCH SINGLE MOVIE AND CAST FOR THE INFO TAB IN THE SWIPER
|--------------------------------------------------
*/

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


/**
|--------------------------------------------------
| FETCH ALL MOVIES IN THE SWIPER TO RENDER CARDS
|--------------------------------------------------
*/

const fetchMoviesRequest = () => {
    return {
      type: "FETCH_MOVIE_REQUEST"
    };
  };
  
const fetchMoviesSuccess = (movies) => {
    return {
        type: "FETCH_MOVIE_SUCCESS",
        movies
    };
};

const fetchMoviesFailed = error => {
    return {
        type: "FETCH_MOVIE_FAILED",
        error
    };
};

// Red: action, romance, thriller, history
// Pink: family, music, animated, comedy, romance
// Orange: adventure, comedy, family, documentary
// Yellow: thriller, drama, comedy, war, crime
// Green: Horror, sci-fi, documentary, mystery
// Blue: drama, sci-fi, mystery, thriller
// Purple: sci-fi, comedy, animated, fantasy

const action = 28
const animated = 16
const documentary = 99
const drama = 18
const family = 10751
const fantasy = 14
const history = 36
const comedy = 35
const war = 10752
const crime = 80
const music = 10402
const mystery = 9648
const romance = 10749
const scifi = 878
const horror = 27
const thriller = 53
const adventure = 12

export const fetchMovies = (color) => {
    return async dispatch => {
        try {
            dispatch(fetchMoviesRequest());
            let res = await axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=18&api_key=${API_KEY}`)
            dispatch(fetchMoviesSuccess(res.data));
        }
        catch(err){
            dispatch(fetchMoviesFailed(err));
        }
    };
};