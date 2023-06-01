import { movieReducer } from '../features/movies/reducer';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

const reducer = combineReducers({
  movies: movieReducer
});

export const store = configureStore({
  reducer
});

// store movies in a way that you use more easily
