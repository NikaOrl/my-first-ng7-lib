import { NgModule } from '@angular/core';
import { NxCollapsibleItemComponent } from './components/collapsible-item/nx-collapsible-item.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [NxCollapsibleItemComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [NxCollapsibleItemComponent]
})
export class NxCollapsibleItemModule { }
