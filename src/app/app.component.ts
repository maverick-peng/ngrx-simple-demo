import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  globalMessage$: Observable<string>;

  constructor(
    private store: Store<AppState>
  ) {
    this.globalMessage$ = store.select('message');
  }


  dispatchActionA() {
     this.store.dispatch({type: 'ACTION_A'});

  }

  dispatchActionB() {
    this.store.dispatch({type: 'ACTION_B'});

  }
}
