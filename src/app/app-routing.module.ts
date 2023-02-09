import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminGuard } from './_helpers/admin.guard';
import { AuthGaurdGuard } from './_helpers/auth-gaurd.guard';

const routes: Routes = [
  {
    path: "", component: LoginComponent
  },
  {
    path: 'users', canActivate: [AuthGaurdGuard],
    loadChildren: () => import('./user-accessable-pages/user-accessable-pages.module').then(m => m.UserAccessablePagesModule)
  },
  { path: 'admin', canActivate: [AuthGaurdGuard, AdminGuard],
  loadChildren: () => import('./admin-accessable-pages/admin-accessable-pages.module').then(m => m.AdminAccessablePagesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
