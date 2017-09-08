import { Action } from '@ngrx/store';

export const TodoActionTypes = {
  ADD_TODO: '[Todos] Add todo'
};

export class AddTodoAction implements Action {
  type: string = TodoActionTypes.ADD_TODO;
  constructor(public payload: string) {}
}

export type TodoActions = AddTodoAction;
