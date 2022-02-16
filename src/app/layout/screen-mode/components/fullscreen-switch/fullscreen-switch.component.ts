import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import * as fromStore from '../../store';

@Component({
  selector: 'app-fullscreen-switch',
  templateUrl: './fullscreen-switch.component.html',
  styleUrls: [
    './fullscreen-switch.component.css',
    '../../../navbar/navbar.component.css',
  ],
})
export class FullscreenSwitchComponent implements OnInit {
  isFullscreen$: Observable<boolean>;

  constructor(private store: Store) {
    this.isFullscreen$ = this.store.select(fromStore.getIsFullscreen);
  }

  ngOnInit(): void {}

  fullscreen() {
    const elem = document.documentElement;
    elem.requestFullscreen();
    this.store.dispatch(new fromStore.EnterFullscreen());
  }

  closeFullscreen() {
    document.exitFullscreen().then((a) => console.log(a));
    this.store.dispatch(new fromStore.ExitFullscreen());
  }
}
