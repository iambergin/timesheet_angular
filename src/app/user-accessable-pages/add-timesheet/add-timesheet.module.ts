import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddTimesheetRoutingModule } from './add-timesheet-routing.module';
import { AddTimesheetComponent } from './add-timesheet.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddTimesheetComponent
  ],
  imports: [
    CommonModule,
    AddTimesheetRoutingModule,
    ReactiveFormsModule
  ]
})
export class AddTimesheetModule { }
