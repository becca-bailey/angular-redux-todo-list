import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Todo } from './todos/models/todo';
import { AppState } from './todos/reducers/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public todos$: Observable<Todo[]>;

  constructor(private store: Store<AppState>) {
     this.todos$ = store.select('todos');
  }
}
