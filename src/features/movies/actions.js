import { MOVIES } from '../../services/constant';
import { fetchData } from '../../services/api';

export const fetchMovies = () => {
  return async (dispatch) => {
    try {
      const response = await fetchData(MOVIES);
      return dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data });
    } catch (error) {
      console.log('Error fetching data:', error);
      throw error;
    }
  };
};
