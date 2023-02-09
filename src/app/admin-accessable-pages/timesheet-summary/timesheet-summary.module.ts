import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimesheetSummaryRoutingModule } from './timesheet-summary-routing.module';
import { TimesheetSummaryComponent } from './timesheet-summary.component';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    TimesheetSummaryComponent
  ],
  imports: [
    CommonModule,
    TimesheetSummaryRoutingModule,
    NgChartsModule
  ]
})
export class TimesheetSummaryModule { }
