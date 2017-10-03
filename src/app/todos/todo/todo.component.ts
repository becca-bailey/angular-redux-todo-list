import { Component, Input } from '@angular/core';
import { Todo } from '../models/todo';
import { AppState } from '../reducers/index';
import { Store } from '@ngrx/store';
import { ToggleTodoAction } from '../actions/todos.actions';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent {
  @Input() todo: Todo;

  constructor(private store: Store<AppState>) {}

  onCheckboxChange() {
    this.store.dispatch(new ToggleTodoAction(this.todo.id));
  }
}
