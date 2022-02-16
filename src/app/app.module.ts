import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ShareModule } from './shared/share.module';
import { LayoutModule } from './layout/layout.module';

import { reducers } from './app.reducer';
import { AppComponent } from './app.component';

import { PostModule } from './modules/post/post.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    PostModule,
    ShareModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 10,
    }),
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
