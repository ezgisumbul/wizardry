import { MOVIES } from '../../services/constant';
import { fetchData } from '../../services/api';
import { FETCH_MOVIES_SUCCESS } from './action-types';

export const fetchMovies = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetchData(MOVIES, id);

      // Create an object for movieData coming from api response
      const movieData = {};

      // instead of storing the response as an array of objects,
      // store every array assigned to a key, where the key is the slug
      // by doing this, you can access a single movie by its slug
      // without the need to fetch that single movie again
      // as it is stored in movies slot in the store already.

      const storeMovieData = (movie) => {
        movieData[movie.slug] = movie;
      };

      if (id) {
        storeMovieData(response.data.attributes);
      } else {
        response.data.forEach((movie) => {
          storeMovieData(movie.attributes);
        });
      }

      // instead of payload being response.data, payload will be
      // the object we created, which will save us from iterating over an array
      // allow us to access every value(movie) through their key(slug)
      // in the component that renders them
      dispatch({
        type: FETCH_MOVIES_SUCCESS,
        // isFetched will allow us to check if all movie data is fetched from the api
        // or just a single movie (with its id)
        // if an id exists, this means we only fetched a single movie
        // (the user visited a single movie before movies page is rendered)
        // which means movies as an object consists of a single movie
        payload: { movieData, isFetched: !id }
      });
    } catch (error) {
      console.log('Error fetching data:', error);
      throw error;
    }
  };
};
