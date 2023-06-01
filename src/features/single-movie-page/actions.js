import { fetchData } from '../../services/api';
import { MOVIES } from '../../services/constant';

export const fetchSingleMovie = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetchData(MOVIES, id);
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data });
    } catch (error) {
      console.log('Error fetching data', error);
      throw error;
    }
  };
};
