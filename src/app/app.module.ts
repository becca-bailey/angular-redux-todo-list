import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { metaReducer } from './todos/reducers/index';
import { StoreModule } from '@ngrx/store';
import { AddTodoComponent } from './todos/add-todo/add-todo.component';
import { TodoComponent } from './todos/todo/todo.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    TodoComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot({ reducer: metaReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
