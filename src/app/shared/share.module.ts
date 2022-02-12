import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, BrowserModule, FormsModule],
  exports: [CardComponent, CommonModule, BrowserModule, FormsModule],
})
export class ShareModule {}
