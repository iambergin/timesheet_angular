import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { LoginServiceService } from '../_services/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  
  constructor(private http: HttpClient, ) {
    
   }


  getUsersList() : Observable<any> {

    return this.http.get(environment.baseUrl + "admin/user-list");
 }

 updateTimesheet(data = {}): Observable<any> {
  return this.http.post(environment.baseUrl + "auth/add-timesheet", data);
 } 

 addUser(data = {}): Observable<any> {
  return this.http.post(environment.baseUrl + "admin/create-user", data);
 } 

 
 getTimesheetFoAll() : Observable<any> {
  return this.http.get(environment.baseUrl + "admin/get-all-timesheet");
}

}
