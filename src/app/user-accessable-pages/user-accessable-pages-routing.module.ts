import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAccessablePagesComponent } from './user-accessable-pages.component';

const routes: Routes = [{ path: '', component: UserAccessablePagesComponent,
children: [
  { path: 'add-timesheet', loadChildren: () => import('./add-timesheet/add-timesheet.module').then(m => m.AddTimesheetModule) }
] },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAccessablePagesRoutingModule { }
