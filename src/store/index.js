// import { movieReducer } from '../features/movies/reducer';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { reducer } from './../reducers/index';

// const reducer = combineReducers({
//   movies: movieReducer
// });

export const store = configureStore({
  reducer
});

// store movies in a way that you use more easily
