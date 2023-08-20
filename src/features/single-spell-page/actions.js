import { fetchData } from '../../services/api';
import { SPELLS } from '../../services/constant';

export const fetchSingleSpell = (id) => {
  console.log('fetch single spell is running');
  return async (dispatch) => {
    try {
      const response = await fetchData(SPELLS, id);
      dispatch({ type: 'FETCH_SPELL_SUCCESS', payload: response.data });
    } catch (error) {
      console.log('Error fetching data:', error);
      throw error;
    }
  };
};
