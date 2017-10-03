import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodoComponent } from './add-todo.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState, metaReducer } from 'app/todos/reducers';
import { AddTodoAction } from '../actions/todos.actions';

describe('AddTodoComponent', () => {
  let component: AddTodoComponent;
  let fixture: ComponentFixture<AddTodoComponent>;
  let store: Store<AppState>;

  beforeEach(async(() => {
    store = jasmine.createSpyObj('store', ['dispatch']);
    TestBed.configureTestingModule({
      imports: [
        StoreModule.provideStore(metaReducer)
      ],
      declarations: [ AddTodoComponent ],
      providers: [
        { provide: Store, useValue: store }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('adds a todo', () => {
    component.addTodo({ value: 'My new todo' });

    expect(store.dispatch).toHaveBeenCalledWith(new AddTodoAction({
      message: 'My new todo',
      id: 1,
    }));
  });
});
