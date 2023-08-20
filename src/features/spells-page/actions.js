import { fetchData } from '../../services/api';
import { SPELLS } from '../../services/constant';
import { FETCH_SPELLS_SUCCESS } from './action-types';

export const fetchSpells = (id) => {
  // console.log('fetchSpells() action is running');
  return async (dispatch) => {
    try {
      const response = await fetchData(SPELLS, id);

      const spellData = {};

      const storeSpellData = (spell) => {
        spellData[spell.slug] = spell;
      };

      if (id) {
        storeSpellData(response.data.attributes);
      } else {
        response.data.forEach((spell) => {
          storeSpellData(spell.attributes);
        });
      }

      dispatch({
        type: FETCH_SPELLS_SUCCESS,
        payload: { spellData, isFetched: !id }
      });
    } catch (error) {
      console.log('Error fetching data:', error);
      throw error;
    }
  };
};
