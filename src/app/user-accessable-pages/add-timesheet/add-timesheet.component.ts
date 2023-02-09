import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/_services/general.service';
import { LoginServiceService } from 'src/app/_services/login-service.service';

@Component({
  selector: 'app-add-timesheet',
  templateUrl: './add-timesheet.component.html',
  styleUrls: ['./add-timesheet.component.css']
})
export class AddTimesheetComponent implements OnInit {

  fg : FormGroup | FormGroup;
  constructor(private generalService: GeneralService, private fb: FormBuilder, private loginService: LoginServiceService) {
    let username = loginService.getLoggedUserDetails();
    this.fg = this.fb.group({
      title: ["", Validators.required],
      project: ["", Validators.required],
      date: ["", Validators.required],
      userId: [username['userId'], Validators.required], 
      hrs: [0, Validators.required]
    })
  }

  ngOnInit(): void {
    
  }

  updateTimesheet() : void {
    console.log(this.fg.value)
    if(this.fg.valid) {
      this.generalService.updateTimesheet(this.fg.value).subscribe((x) => {
        console.log(x)
      })
    }
  }

}
