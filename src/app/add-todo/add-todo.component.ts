import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../common/index';
import * as todoActions from '../common/todos/todos.actions';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  @Input() store: Store<fromRoot.AppState>;

  addTodo(input) {
    this.store.dispatch(new todoActions.AddTodoAction(input.value));
    input.value = '';
  }
}
