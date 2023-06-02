import { fetchData } from '../../services/api';
import { SPELLS } from '../../services/constant';

export const fetchSpells = () => {
  console.log('fetchSpells() action is running');
  return async (dispatch) => {
    try {
      const response = await fetchData(SPELLS);
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: response.data });
    } catch (error) {
      console.log('Error fetching data:', error);
      throw error;
    }
  };
};
