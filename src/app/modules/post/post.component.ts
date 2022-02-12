import { Post } from './post.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { EditPost, Upvote, Downvote } from './post.actions';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  currentPost$: Observable<Post>;
  inputTxt = '';

  constructor(public store: Store<AppState>) {
    this.currentPost$ = store.select('post');
  }

  ngOnInit(): void {}

  edit(text: string) {
    this.store.dispatch(new EditPost({ text }));
  }

  upvote() {
    this.store.dispatch(new Upvote());
  }

  downvote() {
    this.store.dispatch(new Downvote());
  }
}
