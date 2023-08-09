import {combineReducers} from 'redux';

import {todos} from './todos/todos-reducer';
import {filters} from "./filters/filter-reducer";

export const rootReducer = combineReducers({
  todos,
  filters
});