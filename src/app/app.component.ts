import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  globalMessage$: Observable<string>;
  footerData: any = { label: 1 };

  constructor(private store: Store<AppState>) {
    this.globalMessage$ = store.select('message');
  }

  dispatchActionA() {
    this.store.dispatch({ type: 'ACTION_A' });
  }

  dispatchActionB() {
    this.store.dispatch({ type: 'ACTION_B' });
  }

  changeFooterData() {
    console.log('changeFooterData called');

    // immutable 的寫法
    // this.footerData = { label: this.footerData.label + 1 };

    // 需要 ChangeDetectionStrategy.OnPush 才能偵測到
    this.footerData.label = this.footerData.label + 1;
  }
}
