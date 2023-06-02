export const fetchData = async (endpoint, id) => {
  let url = `https://api.potterdb.com${endpoint}`;

  if (id) {
    url = `${url}/${id}`;
  }

  console.log('fetchData() running successfully');

  try {
    const response = await fetch(url);

    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching data', error);
    throw error;
  }
};
