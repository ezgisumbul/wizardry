import { combineReducers } from 'redux';
import { moviesReducer } from '../features/movies/reducer';
import { spellsReducer } from '../features/spells-page/reducer';

export const reducer = combineReducers({
  movies: moviesReducer,
  spells: spellsReducer
});
