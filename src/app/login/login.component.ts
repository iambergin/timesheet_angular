import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginServiceService } from '../_services/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup | FormGroup;

  constructor(
    private fb: FormBuilder, 
    private loginServie: LoginServiceService, 
    private spinner: NgxSpinnerService, 
    private route: Router) {
    this.loginServie.clearLocalStorage();
    this.loginForm = this.fb.group({
      username: this.fb.control([], Validators.required),
      password: this.fb.control([], Validators.required)
    })
  }

  login() {
    if (this.loginForm.valid) {
      this.spinner.show();
      this.loginServie.login(this.loginForm.value).subscribe((val) => {
        if (!val.hasError) {
          this.loginServie.storeUserDetails(val.response)
          let roles: Array<String> = val.response.roles
          if (roles.includes('ADMIN')) {
            this.route.navigate(['/admin'])
          } else {
            this.route.navigate(['/users'])
          }
        }
      }, () => {
        // On error
      }, () => {
        // On Complete
        this.spinner.hide();
      })
    }
  }

}
