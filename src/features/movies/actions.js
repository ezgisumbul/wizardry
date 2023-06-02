import { MOVIES } from '../../services/constant';
import { fetchData } from '../../services/api';
import { FETCH_MOVIES_SUCCESS } from './action-types';

export const fetchMovies = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetchData(MOVIES, id);

      const movieData = {};

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

      dispatch({
        type: FETCH_MOVIES_SUCCESS,
        payload: { movieData, isFetched: !id }
      });
    } catch (error) {
      console.log('Error fetching data:', error);
      throw error;
    }
  };
};
