import { combineReducers } from 'redux';
import { moviesReducer } from '../features/movies/reducer';
import { singleMovieReducer } from '../features/single-movie-page/reducer';

export const reducer = combineReducers({
  movies: moviesReducer,
  movie: singleMovieReducer
});
