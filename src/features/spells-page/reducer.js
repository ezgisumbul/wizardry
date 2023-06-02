export const spellsReducer = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return action.payload;

    default:
      return state;
  }
};
