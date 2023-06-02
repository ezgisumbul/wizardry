export const movies = (state) => {
  return state.movies?.movieData;
};

export const isFetched = (state) => {
  return state.movies?.isFetched;
};
