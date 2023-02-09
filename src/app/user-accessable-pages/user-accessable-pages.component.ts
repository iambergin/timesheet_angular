import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../_services/login-service.service';

@Component({
  selector: 'app-user-accessable-pages',
  templateUrl: './user-accessable-pages.component.html',
  styleUrls: ['./user-accessable-pages.component.css']
})
export class UserAccessablePagesComponent {
  constructor(private loginService: LoginServiceService, private router: Router) {}
  logout() {
    this.loginService.clearLocalStorage()
    this.router.navigate(['/'])
  }

}
