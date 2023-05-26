import { applyMiddleware } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import { dataReducer } from './../reducers/index';

export const store = createStore(dataReducer, applyMiddleware(thunk));
