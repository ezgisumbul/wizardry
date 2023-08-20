export const singleSpellReducer = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_SPELL_SUCCESS':
      return action.payload;
    default:
      return state;
  }
};
