import { fetchData } from './../services/api';

export const fetchAndStoreData = () => {
  return (dispatch) => {
    fetchData()
      .then((data) => {
        dispatch({ type: 'FETCH_DATA_SUCCESS', payload: data });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        throw error;
      });
  };
};
