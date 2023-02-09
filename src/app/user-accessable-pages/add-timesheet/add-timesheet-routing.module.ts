import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTimesheetComponent } from './add-timesheet.component';

const routes: Routes = [{ path: '', component: AddTimesheetComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddTimesheetRoutingModule { }
