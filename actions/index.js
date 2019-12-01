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
      type: "FETCH_MOVIES_REQUEST"
    };
  };
  
const fetchMoviesSuccess = (data) => {
    return {
        type: "FETCH_MOVIES_SUCCESS",
        data
    };
};

const fetchMoviesFailed = error => {
    return {
        type: "FETCH_MOVIES_FAILED",
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

const getGenres = (color) => {
    switch(color){
        case "red":
            return [action, romance, thriller, history]
        case "pink":
            return [family, animated, comedy, romance]
        case "orange":
            return [adventure, comedy, family, documentary]
        case "yellow":
            return [thriller, drama, comedy, crime]
        case "green":
            return [horror, scifi, documentary, mystery]
        case "blue":
            return [drama, scifi, mystery, thriller]
        case "purple":
            return [scifi, comedy, animated, fantasy]
        default:
            return ""
    }
}

const baseGenreUrl = "https://api.themoviedb.org/3/discover/movie?with_genres="
const finalUrlPart = `&api_key=${API_KEY}`

export const fetchMovies = (color) => {
    const genre = getGenres(color)
    return dispatch => {
            dispatch(fetchMoviesRequest());
            // MAKES 4 REQs FOR 4 SELECTED GENRES
            axios.all([
                axios.get(`${baseGenreUrl}${genre[0]}${finalUrlPart}`),
                axios.get(`${baseGenreUrl}${genre[1]}${finalUrlPart}`),
                axios.get(`${baseGenreUrl}${genre[2]}${finalUrlPart}`),
                axios.get(`${baseGenreUrl}${genre[3]}${finalUrlPart}`)
            ])
            // SET THE RESPONSE TO AN ARRAY WITH 5 MOVIES FOR EACH CATEGORY
            .then(axios.spread((genre1, genre2, genre3, genre4) => {
                let allMovies = [
                    ...genre1.data.results.slice(0, 5), 
                    ...genre2.data.results.slice(0, 5), 
                    ...genre3.data.results.slice(0, 5), 
                    ...genre4.data.results.slice(0, 5)
                ]
            // REMOVES DUPLICATES MOVIES FROM RESPONSE
                let uniqueMovies = Array.from(new Set(allMovies.map(m => m.original_title)))
                .map(title => {
                    return allMovies.find(m => m.original_title === title)
                })
            // Fisher Yates Algorithm: SHUFFLE RANDOMPLY MOVIES INSIDE ARRAY
                for(let i = uniqueMovies.length -1; i > 0; i--){
                    const j = Math.floor(Math.random() * i)
                    const temp = uniqueMovies[i]
                    uniqueMovies[i] = uniqueMovies[j]
                    uniqueMovies[j] = temp
                }
                dispatch(fetchMoviesSuccess(uniqueMovies));
            }))
            .catch(err => dispatch(fetchMoviesFailed(err)))
    }
};

/**
|--------------------------------------------------
| FAVOURITES
|--------------------------------------------------
*/

export const addToFav = (newFav) => {
    return {
        type: "ADD_TO_FAVOURITES",
        newFav
    }
}