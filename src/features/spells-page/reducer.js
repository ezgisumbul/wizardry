import { FETCH_SPELLS_SUCCESS } from './action-types';

export const spellsReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_SPELLS_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};
