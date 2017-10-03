import { Action } from '@ngrx/store';
import { Todo } from '../models/todo';

export const TodoActionTypes = {
  ADD_TODO: '[Todos] Add todo',
  TOGGLE_TODO: '[Todos] Toggle todo'
};

export class AddTodoAction implements Action {
  type: string = TodoActionTypes.ADD_TODO;
  constructor(public payload: any) {}
}

export class ToggleTodoAction implements Action {
  type: string = TodoActionTypes.TOGGLE_TODO;
  constructor(public payload: any) {}
}

export type TodoActions = AddTodoAction | ToggleTodoAction;
