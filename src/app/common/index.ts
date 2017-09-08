import * as fromTodos from './todos/todos.reducer';
import { compose } from '@ngrx/core';
import { storeLogger } from 'ngrx-store-logger';
import { combineReducers, createSelector } from '@ngrx/store';

export interface AppState {
  todos: fromTodos.State;
}

export const reducers = {
  todos: fromTodos.reducer,
};

const developmentReducer: Function = compose(storeLogger(), combineReducers)(reducers);

export function metaReducer(state: AppState, action: any) {
  return developmentReducer(state, action);
}

export const getTodosState = (state: AppState) => state.todos;

export const getTodos = createSelector(getTodosState, fromTodos.getTodoList);
