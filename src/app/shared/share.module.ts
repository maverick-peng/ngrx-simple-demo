import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './components/card/card.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, BrowserModule, FormsModule, AppRoutingModule],
  exports: [
    CardComponent,
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
})
export class ShareModule {}
