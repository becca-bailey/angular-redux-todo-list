import { Todo } from '../models/todo';
import { TodoActions, TodoActionTypes } from '../actions/todos.actions';

export type State = Todo[];

class Counter {
  value = 0;

  incrementAndGet(): number {
    this.value += 1;
    return this.value;
  }
}

const counter = new Counter();

export function reducer(state = [], action: TodoActions): State {
  switch (action.type) {
    case TodoActionTypes.ADD_TODO: {
      const message = action.payload;
      return [
        ...state,
        {
          message,
          completed: false,
          id: counter.incrementAndGet(),
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
