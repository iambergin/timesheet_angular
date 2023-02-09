import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { GeneralService } from 'src/app/_services/general.service';
import { LoginServiceService } from 'src/app/_services/login-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  fg : FormGroup | FormGroup;
  constructor(private generalService: GeneralService, private fb: FormBuilder, 
    private loginService: LoginServiceService,  private spinner: NgxSpinnerService) {
    let username = loginService.getLoggedUserDetails();
    this.fg = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      fullName: ["", Validators.required]
    })
  }

  ngOnInit(): void {
    
  }

  addUser() {
    if(this.fg.valid) {
      this.spinner.show()
      this.generalService.addUser(this.fg.value).subscribe((x) => {
        if(!x.hasError) {
          this.fg.reset()
        }
      }, () => {}, () => {
        this.spinner.hide()
      })
    }
  }

}
