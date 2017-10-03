import { AddTodoAction, ToggleTodoAction } from '../actions/todos.actions';
import { reducer } from './todos.reducer';

describe('todos reducer', () => {

  it('adds a new todo to the state', () => {
    const initialState = [];

    const updatedState = reducer(initialState, new AddTodoAction('some todo'));

    expect(updatedState).not.toEqual(initialState);

    expect(updatedState).toContain({
      id: 1,
      message: 'some todo',
      completed: false,
    });
  });

  it('toggles completed', () => {
    const initialState = [
      {
        id: 11,
        message: 'first todo',
        completed: false,
      },
      {
        id: 12,
        message: 'second todo',
        completed: false,
      }
    ];

    const updatedState = reducer(initialState, new ToggleTodoAction(11));

    expect(updatedState).not.toEqual(initialState);

    expect(updatedState).toEqual([
      {
        id: 11,
        message: 'first todo',
        completed: true,
      },
      {
        id: 12,
        message: 'second todo',
        completed: false,
      }
    ]);
  });
})
