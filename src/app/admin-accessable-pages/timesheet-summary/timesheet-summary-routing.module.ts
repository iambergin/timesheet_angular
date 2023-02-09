import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimesheetSummaryComponent } from './timesheet-summary.component';

const routes: Routes = [{ path: '', component: TimesheetSummaryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimesheetSummaryRoutingModule { }
