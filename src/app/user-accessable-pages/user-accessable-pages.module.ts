import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAccessablePagesRoutingModule } from './user-accessable-pages-routing.module';
import { UserAccessablePagesComponent } from './user-accessable-pages.component';


@NgModule({
  declarations: [
    UserAccessablePagesComponent
  ],
  imports: [
    CommonModule,
    UserAccessablePagesRoutingModule
  ]
})
export class UserAccessablePagesModule { }
