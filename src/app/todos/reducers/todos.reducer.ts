import * as todos from '../actions/todos.actions';
import { Todo } from '../models/todo';

export type State = Todo[];

export function reducer(state = [], action: todos.TodoActions): State {
  switch (action.type) {
    case todos.TodoActionTypes.ADD_TODO: {
      const message = action.payload;
      return [
        ...state,
        {
          message,
          completed: false,
        }
      ];
    }
    default:
      return state;
  }
}
