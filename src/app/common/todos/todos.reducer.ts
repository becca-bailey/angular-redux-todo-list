import * as todos from './todos.actions';

export interface Todo {
  message: string;
  completed: boolean;
}

export type State = Todo[];

const initialState = [];

export function reducer(state = initialState, action: todos.TodoActions): State {
  console.log(state);
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

export function getTodoList(state: State) {
  return state;
}
