export const fetchData = () => {
  return fetch('https://api.potterdb.com/v1/movies')
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Network response was not ok.');
      }
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      throw error;
    });
};
