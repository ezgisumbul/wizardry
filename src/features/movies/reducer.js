import { FETCH_MOVIES_SUCCESS } from './action-types';

export const moviesReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_MOVIES_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};
