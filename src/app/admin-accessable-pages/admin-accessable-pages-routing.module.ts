import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAccessablePagesComponent } from './admin-accessable-pages.component';

const routes: Routes = [{ 
  path: '', component: AdminAccessablePagesComponent ,
  children: [
    {path: "", redirectTo: "users", pathMatch: "full"},
    { path: 'users', loadChildren: () => import('./user-list/user-list.module').then(m => m.UserListModule) },
    { path: 'timesheet-summary', loadChildren: () => import('./timesheet-summary/timesheet-summary.module').then(m => m.TimesheetSummaryModule) },
    { path: 'add-user', loadChildren: () => import('./add-user/add-user.module').then(m => m.AddUserModule) },
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminAccessablePagesRoutingModule { }
