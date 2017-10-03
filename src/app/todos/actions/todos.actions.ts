import { Action } from '@ngrx/store';

export const TodoActionTypes = {
  ADD_TODO: '[Todos] Add todo',
  TOGGLE_TODO: '[Todos] Toggle todo'
};

export class AddTodoAction implements Action {
  type: string = TodoActionTypes.ADD_TODO;
  constructor(public payload: string) {}
}

export class ToggleTodoAction implements Action {
  type: string = TodoActionTypes.TOGGLE_TODO;
  constructor(public payload: number) {}
}

export type TodoActions = AddTodoAction | ToggleTodoAction;
