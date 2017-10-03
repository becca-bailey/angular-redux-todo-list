import { Todo } from '../models/todo';
import { TodoActions, TodoActionTypes } from '../actions/todos.actions';

export type State = Todo[];

export function reducer(state = [], action: TodoActions): State {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO: {
      const message = action.payload.message;
      const id = action.payload.id;
      return [
        ...state,
        {
          id,
          message,
          completed: false,
        }
      ];
    }
    case TodoActionTypes.TOGGLE_TODO: {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return Object.assign({}, todo, { completed: !todo.completed });
        }
        return todo;
      });
    }
    default:
      return state;
  }
}
