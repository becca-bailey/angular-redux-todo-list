import { Component, Input } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-list',
  template: `
    <div *ngFor="let todo of todos">
      <app-todo>{{ todo.message }}</app-todo>
    </div>
  `
})
export class TodoListComponent {
  @Input() todos: Todo[];
}
