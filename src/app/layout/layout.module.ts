import { NgModule } from '@angular/core';
import { ShareModule } from '../shared/share.module';

import { StoreModule } from '@ngrx/store';
import { reducers } from './screen-mode/store';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FullscreenSwitchComponent } from './screen-mode/components/fullscreen-switch/fullscreen-switch.component';

@NgModule({
  declarations: [FooterComponent, NavbarComponent, FullscreenSwitchComponent],
  imports: [ShareModule, StoreModule.forFeature('screenmode', reducers)],
  exports: [FooterComponent, NavbarComponent, FullscreenSwitchComponent],
})
export class LayoutModule {}
