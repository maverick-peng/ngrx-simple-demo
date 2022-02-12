import { NgModule } from '@angular/core';
import { ShareModule } from 'src/app/shared/share.module';
import { PostComponent } from './post.component';

@NgModule({
  declarations: [PostComponent],
  imports: [ShareModule],
  exports: [PostComponent],
})
export class PostModule {}
