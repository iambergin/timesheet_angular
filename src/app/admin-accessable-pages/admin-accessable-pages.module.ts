import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAccessablePagesRoutingModule } from './admin-accessable-pages-routing.module';
import { AdminAccessablePagesComponent } from './admin-accessable-pages.component';


@NgModule({
  declarations: [
    AdminAccessablePagesComponent
  ],
  imports: [
    CommonModule,
    AdminAccessablePagesRoutingModule
  ]
})
export class AdminAccessablePagesModule { }
