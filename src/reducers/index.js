import { combineReducers } from 'redux';
import { moviesReducer } from '../features/movies/reducer';
import { singleMovieReducer } from '../features/single-movie-page/reducer';
import { spellsReducer } from '../features/spells-page/reducer';
import { singleSpellReducer } from '../features/single-spell-page/reducer';

export const reducer = combineReducers({
  movies: moviesReducer,
  movie: singleMovieReducer,
  spells: spellsReducer,
  spell: singleSpellReducer
});
