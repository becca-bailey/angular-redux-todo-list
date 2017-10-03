import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers/index';
import { AddTodoAction } from '../actions/todos.actions';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
})
export class AddTodoComponent {

  constructor(private store: Store<AppState>) {}

  addTodo(input) {
    this.store.dispatch(new AddTodoAction(input.value));
    input.value = '';
  }
}
