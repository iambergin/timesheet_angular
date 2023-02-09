import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { GeneralService } from 'src/app/_services/general.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  constructor(private gService: GeneralService, private spinner: NgxSpinnerService, ) {} 

  userList : [] = [];

  ngOnInit(): void {
    this.gService.getUsersList().subscribe((x) => {
      this.spinner.show()
      if(!x.hasError) {
        this.userList = x.response;
      }
    }, () => {}, () => {
      this.spinner.hide()
    })
  }

  

}
