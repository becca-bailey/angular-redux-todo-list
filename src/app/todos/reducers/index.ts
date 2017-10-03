import * as fromTodos from './todos.reducer';
import { compose } from '@ngrx/core';
import { storeLogger } from 'ngrx-store-logger';
import { Action, combineReducers } from '@ngrx/store';
import { Todo } from '../models/todo';

export interface AppState {
  todos: Todo[];
}

export const reducers = {
  todos: fromTodos.reducer,
};

const developmentReducer: Function = compose(storeLogger(), combineReducers)(reducers);

export function metaReducer(state: AppState, action: Action) {
  return developmentReducer(state, action);
}
