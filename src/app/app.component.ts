import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './common/index';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos$: Observable<any>;

  constructor(private store: Store<fromRoot.AppState>) {
    this.todos$ = store.select(fromRoot.getTodos);
  }
}
