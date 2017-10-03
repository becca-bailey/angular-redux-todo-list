import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import { AppState } from '../reducers/index';
import { Store } from '@ngrx/store';
import { ToggleTodoAction } from '../actions/todos.actions';
import { Todo } from '../models/todo';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  const store: Store<AppState> = jasmine.createSpyObj('store', ['dispatch']);
  const todo: Todo = {
    id: 10,
    message: 'Some todo list item',
    completed: false,
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoComponent ],
      providers: [
        { provide: Store, useValue: store }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    component.todo = todo;
    fixture.detectChanges();
  });

  it('toggles the todo\'s completed state', () => {
    component.onCheckboxChange();

    expect(store.dispatch).toHaveBeenCalledWith(new ToggleTodoAction(todo.id));
  });
});
