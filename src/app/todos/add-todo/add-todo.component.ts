import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as todoActions from '../actions/todos.actions';
import { AppState } from '../reducers/index';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
})
export class AddTodoComponent {

  constructor(private store: Store<AppState>) {}

  addTodo(input) {
    this.store.dispatch(new todoActions.AddTodoAction(input.value));
    input.value = '';
  }
}
