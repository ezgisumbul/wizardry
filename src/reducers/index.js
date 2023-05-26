// import { fetchData } from './../services/api';
const initialState = {
  data: [],
  isLoading: false,
  error: null
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_START':
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: null
      };
    case 'FETCH_DATA_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
