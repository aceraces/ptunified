import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegularHomeRoutingModule } from './regular-home-routing.module';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RegularHomeRoutingModule
  ]
})
export class RegularHomeModule { }
