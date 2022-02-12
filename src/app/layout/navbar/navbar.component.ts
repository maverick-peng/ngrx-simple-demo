import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../app.reducer';
import { Post } from '../../modules/post/post.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  globalMessage$: Observable<string>;
  currentPost$: Observable<Post>;

  constructor(public store: Store<AppState>) {
    this.globalMessage$ = store.select('message');
    this.currentPost$ = store.select('post');
  }

  ngOnInit(): void {}
}
