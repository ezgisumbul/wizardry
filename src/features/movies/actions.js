import { MOVIES } from '../../services/constant';
import { fetchData } from '../../services/api';
import { useParams } from 'react-router-dom';

export const fetchMovies = () => {
  return async (dispatch) => {
    try {
      const response = await fetchData(MOVIES);
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data });
    } catch (error) {
      console.log('Error fetching data:', error);
      throw error;
    }
  };
};
