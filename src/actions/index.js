import { fetchData } from './../services/api';

export const fetchAndStoreData = () => {
  return async (dispatch) => {
    try {
      // Dispatch an action to indicate the data fetching has started
      dispatch({ type: 'FETCH_DATA_START' });

      // Fetch data using the API service
      const data = await fetchData();

      // Dispatch an action with the fetched data
      dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
    } catch (error) {
      // Dispatch an action if there was an error fetching data
      dispatch({ type: 'FETCH_DATA_FAILURE', payload: error.message });
    }
  };
};
